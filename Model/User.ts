// models/User.ts
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  image?: string;
  role: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  role: { type: String, default: "user" }, // Default role
});

export default mongoose.models.User || mongoose.model<IUser>("User", UserSchema);