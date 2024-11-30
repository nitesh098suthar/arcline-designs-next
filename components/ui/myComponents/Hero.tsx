"use client";
import React, { useState, useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Link from "next/link";
import { useSession } from "next-auth/react";
const changingTexts = [
  "Perfect Sanctuary",
  "Ultimate Retreat",
  "Stylish Haven",
  "Serene Escape",
];

const Hero = () => {
  const session: any = useSession();
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); // Default speed for typing

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setSpeed(50); // Faster speed for deleting
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setSpeed(100); // Slower speed for typing
        setCurrentText((prev) =>
          changingTexts[currentIndex].slice(0, prev.length + 1)
        );
      }

      if (!isDeleting && currentText === changingTexts[currentIndex]) {
        setTimeout(() => setIsDeleting(true), 1000); // Delay before deleting
      }

      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % changingTexts.length);
      }
    };

    const timeout = setTimeout(handleTyping, speed);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, speed]);

  return (
    <div id="heroSection" className="overflow-hidden">
      <div className="flex flex-col justify-center h-full mobile:px-2">
        <div className="mb-2">
          <h1 className="text-black text-5xl font-bold mobile:text-center mobile:px-0 px-6">
            Let&#39;s Build
          </h1>
          <h1 className="text-primary text-5xl font-bold mobile:text-center mobile:px-0 px-6">
            Your {currentText}
          </h1>
        </div>
        <p className="text-xl text-darkGrey mobile:text-center mobile:px-0 px-6">
          Design Buildings, Interiors, and Landscapes in Just a Few Clicks
        </p>
        <div className="mobile:flex mobile:justify-center px-6 ">
          {session?.data?.user?.role === "admin" && (
            <Link href="admin/add-projects">
              <button className="flex items-center gap-2 bg-primary text-center w-fit px-4 py-2 text-white font-semibold mt-2 rounded-md hover:bg-primary/90">
                <p>Dashboard</p>
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
