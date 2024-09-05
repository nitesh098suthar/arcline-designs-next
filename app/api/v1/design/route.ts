import { NextResponse } from "next/server";
import connectDB from "@/lib/database.js";
import Design from "@/Model/Design.js";

//get all designs
export async function GET() {
  await connectDB();
  const allListings = await Design.find();
  
  return NextResponse.json({
    success: true,
    allListings,
  });
}

export async function POST() {
  return NextResponse.json({
    success: true,
  });
}
