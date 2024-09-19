import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl; // Get the current route path

  console.log("Token:", token);

  // If there's no token and the user is trying to access a protected route, redirect to home
  if (!token && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", req.url)); // Redirect to home if not authenticated
  }

  // If the user is authenticated but not an admin, restrict access to admin pages
  if (token && token.role !== "admin" && pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/403", req.url)); // Redirect to a 403 Forbidden page
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
