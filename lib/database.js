import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "arclineDesigns",
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.log("we've got an error in connecting database", error);
  }
};

export default connectDB;
