import Link from "next/link";
import React from "react";

const BestLocationButton = () => {
  return (
    <div className="mb-12 mobile:text-center mobile:px-2">
      <div className="flex gap-6 justify-center flex-wrap px-6">
        <Link href="/location/jalore">
          <button className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey">
            Jalore
          </button>
        </Link>
        <Link href="/location/jaipur">
          <button className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey">
            Jaipur
          </button>
        </Link>
        <Link href="/location/sirohi">
          <button className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey">
            Sirohi
          </button>
        </Link>
        <Link href="/location/ahmedabad">
          <button className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey">
            Ahmedabad
          </button>
        </Link>
        <Link href="/location/pali">
          <button className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey">
            Pali
          </button>
        </Link>
        <Link href="/location/barmer">
          <button className="border-[1px] border-lightGrey px-6 p-2 rounded-full text-darkGrey hover:bg-lightGrey">
            Barmer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BestLocationButton;
