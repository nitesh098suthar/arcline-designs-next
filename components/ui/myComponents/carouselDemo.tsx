"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import testimonials from "./testimonialData";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-[80vw] mb-10"
    >
      <CarouselContent>
        {testimonials.map((item, i) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 " key={i}>
            <div
              key={i}
              className="bg-gray-100 p-6 h-[360px] rounded-lg border-gray-300 border-[1px] w-full"
            >
              <div className="grid place-items-center">
                <div className="w-[100px] rounded-full overflow-hidden h-[100px] border-gray-400 border-[1px]">
                  <Image
                    src={item.userAvatar}
                    alt="avatar"
                    className="h-[100%]"
                    width={200}
                    height={200}
                  />
                </div>
              </div>
              <div className="">
                <h1 className="text-black text-center text-2xl font-medium mt-4 mobile:text-sm">
                  {item.userName}
                </h1>
                <div className="flex justify-center py-3">
                  <p className="text-primary text-center mobile:text-xs">
                    {item.location}
                  </p>
                  <p className="text-primary text-center px-2 mobile:text-xs">
                    at
                  </p>
                  <p className="text-primary text-center mobile:text-xs">
                    {item.location}
                  </p>
                </div>
                <p className="text-black text-center text-sm mobile:text-xs line-clamp-4">
                  {item.description}
                </p>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
      </div>
      <div className="hidden md:block">
        <CarouselNext />
      </div>
    </Carousel>
  );
}
