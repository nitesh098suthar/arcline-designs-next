import React from "react";
import Image from "next/image";
import Link from "next/link";
// import { Link } from "react-router-dom";

const FeatureLocation = () => {
  return (
    <div className="px-6 my-12">
      <div className="flex justify-center items-center">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Featured Location</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="outerBox">
        <div className="child forOverlay">
          <Link href={"/location/jaipur"} className="relative">
            <Image
              src="/images/jr.jpg"
              alt="location image"
              width={500}
              height={500}
              className="locationCard"
            />
            <div className="overlay">
              <p className="text-white capitalize">Jaipur</p>
            </div>
          </Link>
        </div>
        <div className="child specialChild">
          <div className="grandChild forOverlay">
            <Link href={"/location/pali"} className="relative">
              <Image
                src="/images/pl.jpg"
                alt="location image"
                width={500}
                height={500}
                className="locationCard"
              />
              <div className="overlay">
                <p className="text-white capitalize">Pali</p>
              </div>
            </Link>
          </div>
          <div className="grandChild forOverlay">
            <Link href={"/location/sirohi"} className="relative">
              <Image
                src="/images/sr.jpg"
                alt="location image"
                width={500}
                height={500}
                className="locationCard"
              />
              <div className="overlay">
                <p className="text-white capitalize">Sirohi</p>
              </div>
            </Link>
          </div>
          <div className="grandChild forOverlay">
            <Link href={"/location/barmer"} className="relative">
              <Image
                src="/images/br.jpg"
                alt="location image"
                width={500}
                height={500}
                className="locationCard"
              />
              <div className="overlay">
                <p className="text-white capitalize">Barmer</p>
              </div>
            </Link>
          </div>
          <div className="grandChild forOverlay">
            <Link href={"/location/ahmedabad"} className="relative">
              <Image
                src="/images/ah.jpg"
                alt="location image"
                width={500}
                height={500}
                className="locationCard"
              />
              <div className="overlay">
                <p className="text-white capitalize">Ahmedabad</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="child forOverlay">
          <Link href={"/location/jalore"} className="relative">
            <Image
              src="/images/jl.jpg"
              alt="location image"
              width={500}
              height={500}
              className="locationCard"
            />
            <div className="overlay">
              <p className="text-white capitalize">Jalore</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureLocation;
