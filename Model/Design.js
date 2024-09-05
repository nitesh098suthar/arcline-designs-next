import mongoose from "mongoose";

const designSchema = new mongoose.Schema({
  designTitle: {
    type: String,
    minLength: [4, "Title at least 4 char"],
    maxLenght: [80, "Title exceed lenght"],
  },
  designDes: {
    type: String,
    //required : [true, "Please enter design title"],
    minLength: [4, "Description at least 4 char"],
    maxLenght: [200, "Description exceed lenght"],
  },
  location: {
    type: String,
    //required : [true, "Please enter location"]
  },
  category: {
    type: String,
    //required : true
  },
  architectName: {
    type: String,
    //required : [true, "Please enter designer name"]
  },
  profession: {
    type: String,
    //required : [true, "Please choose profession of the creator"]
  },

  heightInFeet: {
    type: String,
    //required : true
  },
  widthInFeet: {
    type: String,
    //required : true
  },
  noOfBathRooms: {
    type: String,
    //required : true
  },
  noOfBedRooms: {
    type: String,
    //required : true
  },
  areaInSquareFeet: {
    type: String,
    //required : true
  },
  areaInSquareFeet: {
    type: String,
    //required : true
  },
  popular: {
    type: String,
    default: false,
  },

  architectImage: {
    public_id: {
      type: String,
      //required : true
    },
    secure_url: {
      type: String,
      //required : true
    },
  },
  houseImage: {
    public_id: {
      type: String,
      //required : true
    },
    secure_url: {
      type: String,
      //required : true
    },
  },
  allImages: [
    {
      public_id: {
        type: String,
        //required : true
      },
      secure_url: {
        type: String,
        //required : true
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Design = mongoose.model("Designs", designSchema)
export default Design
