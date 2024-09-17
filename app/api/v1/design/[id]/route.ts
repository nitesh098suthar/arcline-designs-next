import { NextRequest, NextResponse } from "next/server";
import cloudinary from "cloudinary";
import connectDB from "@/lib/database";
import Design from "@/Model/Design";

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

// Helper function to delete an image from Cloudinary
const deleteImage = (public_id: string) => {
  return new Promise<void>((resolve, reject) => {
    cloudinary.v2.uploader.destroy(public_id, (error, result) => {
      if (error) return reject(error);
      resolve();
    });
  });
};

// Helper function to convert file to buffer
const fileToBuffer = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export async function PUT(req: NextRequest) {
  try {
    await connectDB();

    // Extract ID from URL
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();
    if (!id) {
      return NextResponse.json({
        success: false,
        error: "ID not provided",
      });
    }

    // Parse form data
    const formData = await req.formData();

    const designTitle = formData.get("designTitle") as string | undefined;
    const designDes = formData.get("designDes") as string | undefined;
    const location = formData.get("location") as string | undefined;
    const category = formData.get("category") as string | undefined;
    const architectName = formData.get("architectName") as string | undefined;
    const profession = formData.get("profession") as string | undefined;
    const heightInFeet = formData.get("heightInFeet") as string | undefined;
    const widthInFeet = formData.get("widthInFeet") as string | undefined;
    const noOfBathRooms = formData.get("noOfBathRooms") as string | undefined;
    const noOfBedRooms = formData.get("noOfBedRooms") as string | undefined;
    const areaInSquareFeet = formData.get("areaInSquareFeet") as
      | string
      | undefined;
    const popular = formData.get("popular") === "true";

    // Get existing design
    const existingDesign = await Design.findById(id);

    if (!existingDesign) {
      return NextResponse.json({
        success: false,
        error: "Design not found",
      });
    }

    // Upload images to Cloudinary and delete old ones if new images are provided
    const architectImageFile = formData.get("architectImage") as File | null;
    const houseImageFile = formData.get("houseImage") as File | null;
    const allImagesFiles = formData.getAll("allImages") as File[];

    if (architectImageFile) {
      // Delete old image from Cloudinary
      if (existingDesign.architectImage.public_id) {
        await deleteImage(existingDesign.architectImage.public_id);
      }
      // Upload new image
      const architectImage = await uploadImage(
        await fileToBuffer(architectImageFile),
        "designs/architect"
      );
      existingDesign.architectImage = {
        public_id: architectImage.public_id,
        secure_url: architectImage.secure_url,
      };
    }

    if (houseImageFile) {
      // Delete old image from Cloudinary
      if (existingDesign.houseImage.public_id) {
        await deleteImage(existingDesign.houseImage.public_id);
      }
      // Upload new image
      const houseImage = await uploadImage(
        await fileToBuffer(houseImageFile),
        "designs/house"
      );
      existingDesign.houseImage = {
        public_id: houseImage.public_id,
        secure_url: houseImage.secure_url,
      };
    }

    if (allImagesFiles.length > 0) {
      // Delete old images from Cloudinary
      await Promise.all(
        existingDesign.allImages.map((img: any) => deleteImage(img.public_id))
      );
      // Upload new images
      const allImages = await Promise.all(
        allImagesFiles.map(async (file) =>
          uploadImage(await fileToBuffer(file), "designs/allImages")
        )
      );
      existingDesign.allImages = allImages.map((img) => ({
        public_id: img.public_id,
        secure_url: img.secure_url,
      }));
    }

    // Update fields
    existingDesign.designTitle = designTitle ?? existingDesign.designTitle;
    existingDesign.designDes = designDes ?? existingDesign.designDes;
    existingDesign.location = location ?? existingDesign.location;
    existingDesign.category = category ?? existingDesign.category;
    existingDesign.architectName =
      architectName ?? existingDesign.architectName;
    existingDesign.profession = profession ?? existingDesign.profession;
    existingDesign.heightInFeet = heightInFeet ?? existingDesign.heightInFeet;
    existingDesign.widthInFeet = widthInFeet ?? existingDesign.widthInFeet;
    existingDesign.noOfBathRooms =
      noOfBathRooms ?? existingDesign.noOfBathRooms;
    existingDesign.noOfBedRooms = noOfBedRooms ?? existingDesign.noOfBedRooms;
    existingDesign.areaInSquareFeet =
      areaInSquareFeet ?? existingDesign.areaInSquareFeet;
    existingDesign.popular = popular ?? existingDesign.popular;

    // Save updated design
    await existingDesign.save();

    return NextResponse.json({
      success: true,
      message: "Design updated successfully",
      design: existingDesign,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
}

// ------------------------delete single design------------------------------

export async function DELETE(req: NextRequest) {
  try {
    await connectDB();

    // Extract ID from URL
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "ID not provided",
      });
    }

    // Find the design by ID
    const design = await Design.findById(id);

    if (!design) {
      return NextResponse.json({
        success: false,
        error: "Design not found",
      });
    }

    // Delete images from Cloudinary
    if (design.architectImage.public_id) {
      await deleteImage(design.architectImage.public_id);
    }

    if (design.houseImage.public_id) {
      await deleteImage(design.houseImage.public_id);
    }

    await Promise.all(
      design.allImages.map((img: any) => deleteImage(img.public_id))
    );

    // Delete the design from MongoDB
    await Design.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Design deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
}

// ----------------------get single design-------------------------

export async function GET(req: NextRequest) {
  try {
    await connectDB();

    // Extract ID from URL
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({
        success: false,
        error: "ID not provided",
      });
    }

    // Find the design by ID
    const design = await Design.findById(id);

    if (!design) {
      return NextResponse.json({
        success: false,
        error: "Design not found",
      });
    }

    return NextResponse.json({
      success: true,
      design,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    });
  }
}
