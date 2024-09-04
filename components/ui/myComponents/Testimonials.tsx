import React from "react";
import { CarouselSize } from "./carouselDemo";

const Testimonials = () => {
  return (
    <div className="grid place-content-center border-red-400">
      <div className="flex items-center flex-col mb-8">
        <h1 className="text-3xl font-semibold">Testimonial</h1>
        <div className="flex gap-1 my-4">
          <div className="w-14 h-[5px] rounded-full bg-primary"></div>
          <div className="w-4 h-[5px] rounded-full bg-primary"></div>
        </div>
      </div>
      <CarouselSize />
    </div>
  );
};

export default Testimonials;
