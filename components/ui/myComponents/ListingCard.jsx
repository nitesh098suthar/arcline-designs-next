import Image from "next/image";
import React from "react";

const ListingCard = ({ item }) => {
  const image = item.houseImage?.secure_url || "/images/fallback.png";
  return (
    <div className="">
      <div className="border-[1px] border-lightGrey rounded-xl w-full  hover:bg-lightGrey/30 transition-colors overflow-hidden">
        <div className="p-2 overflow-hidden h-full w-full ">
          <Image
            height={2000}
            width={2000}
            src={image}
            alt="architure-image"
            className="rounded-md object-cover w-full h-full block"
          />
        </div>
        <div className="p-2 h-full">
          <div className="flex gap-2 items-baseline px-2">
            <h3 className="text-primary font-medium text-lg">{`${item?.heightInFeet} x ${item?.widthInFeet}`}</h3>
            <p className="text-darkGrey capitalize">{item?.category}</p>
          </div>
          <h1 className="px-2 font-semibold text-xl pt-2">
            {item?.designTitle}
          </h1>
          <div className="flex justify-between px-2 py-4 ">
            <p className="text-xs">{`${item?.noOfBedRooms} Bedrooms`}</p>
            <p className="text-xs">|</p>
            <p className="text-xs">{`${item?.noOfBathRooms} Bathrooms`}</p>
            <p className="text-xs">|</p>
            <p className="text-xs">{`${
              item?.heightInFeet * item?.widthInFeet
            } SquareFT`}</p>
          </div>
          <div className="flex bordre-lightGrey border-t-[1px] pt-3 items-center">
            <div className="w-[50px] h-[50px] overflow-hidden rounded-full border-[1px] border-lightGrey">
              <Image
                height={2000}
                width={2000}
                src={item.architectImage?.secure_url}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
            <div className="pl-4">
              <h3 className="font-medium">{item?.architectName}</h3>
              <p className="text-sm text-darkGrey">{item?.profession}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
