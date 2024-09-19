"use client";
import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { useSession } from "next-auth/react";



const Hero = () => {
  const session : any = useSession();
  console.log(session);
  return (
    <div id="heroSection" className="overflow-hidden">
      <div className="flex flex-col justify-center h-full mobile:px-2">
        <div className="mb-2">
          <h1 className="text-black text-5xl font-bold mobile:text-center mobile:px-0 px-6 ">
            Let&#39;s Build
          </h1>
          <h1 className="text-primary text-5xl font-bold mobile:text-center mobile:px-0 px-6">
            Your Dream House
          </h1>
        </div>
        <p className=" text-xl text-darkGrey mobile:text-center mobile:px-0 px-6">
          Design Buildings, Interiors, and Landscapes in Just a Few Clicks
        </p>
        <div className="mobile:flex mobile:justify-center px-6 ">
          {session?.data?.user?.role === "admin" && (
            <Link href="admin/add-projects">
              <button className="flex items-center gap-2 bg-primary text-center w-fit px-4 py-2 text-white font-semibold mt-2 rounded-md hover:bg-primary/90">
                <p className="">Dashboard</p>
                <ArrowOutwardIcon />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
