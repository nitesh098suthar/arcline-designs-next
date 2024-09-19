import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";
import User from "@/Model/User";
import connectDB from "@/lib/database";

const handler = NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    strategy: "jwt", // Ensure that the strategy is set to JWT
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  callbacks: {
    async signIn({ user }) {
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
            role: "admin", // Default role
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

    // Add the `role` field to the token
    async jwt({ token, user }) {
      if (user) {
        // Get the role from the database
        await connectDB();
        const dbUser = await User.findOne({ email: user.email });

        if (dbUser) {
          token.role = dbUser.role; // Add the role from the database to the token
        }
      }

      return token;
    },

    async session({ session, token }) {
      try {
        await connectDB();

        // Add role to session from token
        session.user.role = token.role;
        session.user.id = token.id; // Optionally pass the user ID as well

        return session;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session;
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
});

// const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
