// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "@/lib/db";
// import User from "@/Model/User";
// import connectDB from "@/lib/database";

// export const handler = NextAuth({
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   callbacks: {
//     async signIn({ user, account, profile }) {
//       try {
//         await connectDB(); // Ensure the database is connected

//         // Check if the user already exists in the database
//         const existingUser = await User.findOne({ email: user.email });

//         if (!existingUser) {
//           // Create a new user with the fields from the Google profile
//           const newUser = new User({
//             name: user.name,
//             email: user.email,
//             image: user.image,
//             role: "user", // Default role
//           });

//           await newUser.save();
//           console.log("New user saved:", newUser);
//         } else {
//           console.log("User already exists:", existingUser);
//         }
//         return true;
//       } catch (error) {
//         console.error("Error in signIn callback:", error);
//         return false;
//       }
//     },
//     async session({ session, token }) {
//       try {
//         // Ensure the database is connected
//         await connectDB();

//         // Find the user by email from the session object
//         const user = await User.findOne({ email: session.user?.email });

//         if (user) {
//           // Attach additional fields to the session object
//           session.user.role = user.role;
//           session.user.id = user._id; // Add the user ID to the session, if needed
//           session.user.image = user.image; // Ensure the image is updated from the database
//         }

//         return session;
//       } catch (error) {
//         console.error("Error in session callback:", error);
//         return session; // Return the session even if there's an error to avoid breaking the flow
//       }
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import User from "@/Model/User";
import connectDB from "@/lib/database";

export const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Use JWT for session handling
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET, // Ensure this matches your secret in the environment
  },
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        await connectDB(); // Ensure the database is connected

        // Check if the user already exists in the database
        const existingUser = await User.findOne({ email: user.email });

        if (!existingUser) {
          // Create a new user with the fields from the Google profile
          const newUser = new User({
            name: user.name,
            email: user.email,
            image: user.image,
            role: "user", // Default role
          });

          await newUser.save();
          console.log("New user saved:", newUser);
        } else {
          console.log("User already exists:", existingUser);
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    // JWT callback to add id and role to the token
    async jwt({ token, user }) {
      // If the user just signed in, add the id and role to the token
      if (user) {
        token.id = user.id;
        token.role = user.role; // You can add custom fields to the token here
      }
      return token;
    },

    // Session callback to pass data from token to session
    async session({ session, token }) {
      try {
        // Ensure the database is connected
        await connectDB();
        // console.log("here is token in route", token);
        // Find the user by email from the session object
        const user = await User.findOne({ email: session.user?.email });

        if (user) {
          // Attach additional fields to the session object
          session.user.role = token.role; // Use the role from the token
          session.user.id = token.id; // Use the id from the token
          session.user.image = user.image; // Ensure the image is updated from the database
        }

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session; // Return the session even if there's an error to avoid breaking the flow
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure this matches your secret in the environment
});

export { handler as GET, handler as POST };
