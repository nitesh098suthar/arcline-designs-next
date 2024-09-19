import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // console.log("token", token);
  // console.log("Headers:", req.headers);
  // console.log("Cookies:", req.cookies);
  console.log("Token:", token);
  return NextResponse.next();
}

export const config = {
  matcher: ["/:path*"],
};
