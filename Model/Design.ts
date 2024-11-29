import mongoose, { Schema, Document } from "mongoose";

interface IDesign extends Document {
  designTitle: string;
  designDes: string;
  location?: string;
  category?: string;
  architectName?: string;
  profession?: string;
  heightInFeet?: string;
  widthInFeet?: string;
  noOfBathRooms?: string;
  noOfBedRooms?: string;
  areaInSquareFeet?: string;
  popular?: string;
  architectImage: {
    public_id: string;
    secure_url: string;
  };
  houseImage: {
    public_id: string;
    secure_url: string;
  };
  allImages: Array<{
    public_id: string;
    secure_url: string;
  }>;
  createdAt: Date;
}

const designSchema = new Schema({
  designTitle: {
    type: String,
    minLength: [4, "Title at least 4 characters"],
  },
  designDes: {
    type: String,
    minLength: [4, "Description at least 4 characters"],
  },
  location: String,
  category: String,
  architectName: String,
  profession: String,
  heightInFeet: String,
  widthInFeet: String,
  noOfBathRooms: String,
  noOfBedRooms: String,
  areaInSquareFeet: String,
  popular: {
    type: String,
    default: false,
  },
  architectImage: {
    public_id: String,
    secure_url: String,
  },
  houseImage: {
    public_id: String,
    secure_url: String,
  },
  allImages: [
    {
      public_id: String,
      secure_url: String,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Avoid model overwriting error in development
const Design =
  mongoose.models.Designs || mongoose.model<IDesign>("Designs", designSchema);

export default Design;
