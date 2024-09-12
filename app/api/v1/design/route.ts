import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/database.js";
import Design from "@/Model/Design";
import cloudinary from "cloudinary";

//get all designs
export async function GET(req: NextRequest) {
  await connectDB();
  const allListings = await Design.find();
  console.log(NextRequest);
  return NextResponse.json({
    success: true,
    allListings,
  });
}

// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------
// --------------------------------------create design----------------------------------
// -------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------

interface CloudinaryUploadResult {
  public_id: string;
  secure_url: string;
}

// Initialize Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper function to upload images
const uploadImage = (buffer: Buffer, folder: string) => {
  return new Promise<CloudinaryUploadResult>((resolve, reject) => {
    cloudinary.v2.uploader
      .upload_stream({ folder, resource_type: "auto" }, (error, result) => {
        if (error) return reject(error);
        resolve(result as CloudinaryUploadResult);
      })
      .end(buffer);
  });
};

// Helper function to convert file to buffer
const fileToBuffer = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    // Parse form data
    const formData = await req.formData();

    const designTitle = formData.get("designTitle") as string;
    const designDes = formData.get("designDes") as string;
    const location = formData.get("location") as string;
    const category = formData.get("category") as string;
    const architectName = formData.get("architectName") as string;
    const profession = formData.get("profession") as string;
    const heightInFeet = formData.get("heightInFeet") as string;
    const widthInFeet = formData.get("widthInFeet") as string;
    const noOfBathRooms = formData.get("noOfBathRooms") as string;
    const noOfBedRooms = formData.get("noOfBedRooms") as string;
    const areaInSquareFeet = formData.get("areaInSquareFeet") as string;
    const popular = formData.get("popular") === "true";

    // Upload images to Cloudinary
    const architectImageFile = formData.get("architectImage") as File;
    const houseImageFile = formData.get("houseImage") as File;
    const allImagesFiles = formData.getAll("allImages") as File[];

    const architectImage = architectImageFile
      ? await uploadImage(
          await fileToBuffer(architectImageFile),
          "designs/architect"
        )
      : { public_id: "", secure_url: "" };

    const houseImage = houseImageFile
      ? await uploadImage(await fileToBuffer(houseImageFile), "designs/house")
      : { public_id: "", secure_url: "" };

    const allImages = await Promise.all(
      allImagesFiles.map(async (file) =>
        uploadImage(await fileToBuffer(file), "designs/allImages")
      )
    );

    // Create new design
    const newDesign = new Design({
      designTitle,
      designDes,
      location,
      category,
      architectName,
      profession,
      heightInFeet,
      widthInFeet,
      noOfBathRooms,
      noOfBedRooms,
      areaInSquareFeet,
      popular,
      architectImage: {
        public_id: architectImage.public_id,
        secure_url: architectImage.secure_url,
      },
      houseImage: {
        public_id: houseImage.public_id,
        secure_url: houseImage.secure_url,
      },
      allImages: allImages.map((img) => ({
        public_id: img.public_id,
        secure_url: img.secure_url,
      })),
    });

    // Save to MongoDB
    await newDesign.save();

    return NextResponse.json({
      success: true,
      message: "Design created successfully",
      design: newDesign,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Error in catch block",
    });
  }
}
