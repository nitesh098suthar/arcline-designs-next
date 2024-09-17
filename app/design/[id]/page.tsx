"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "next/navigation";
import { allListings } from "@/components/ui/myComponents/allListings";
import { Loader } from "@/components/ui/myComponents/Loader";
import Image from "next/image";

const Details = () => {
  const { id } = useParams();
  console.log(id);

  const {
    data: oneDesign,
    isLoading,
    isError,
  } = useQuery<any>({
    queryKey: ["ALLDESIGNS"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/v1/design/${id}`
      );
      return data;
    },
  });
  if (isLoading) return <Loader />;
  return (
    <div className="px-6 py-10">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Project Details</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className="">
        <Carousel>
          {oneDesign?.design?.allImages?.map((item: any, i: number) => (
            <div key={i} className="">
              <Image
                width={400}
                height={400}
                src={item?.secure_url}
                alt=""
                className="object-cover h-full w-full"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="capitalize">
        <div className="flex items-baseline gap-4">
          <h1 className="text-2xl text-primary mb-2 capitalize">{`${oneDesign?.design?.heightInFeet}x${oneDesign?.design?.widthInFeet}`}</h1>{" "}
          <h1 className="text-darkGrey">{oneDesign?.design?.category}</h1>
        </div>
        <h1 className="text-2xl text-primary mb-2 capitalize">
          {oneDesign?.design?.designTitle}
        </h1>
        <p className="text-sm text-darkGrey border-b-[1px] pb-4 text-justify capitalize">
          {oneDesign?.design?.designDes}
        </p>
        <div className="flex py-4 gap-4 border-b-[1px] pb-4 mb-4 mobile:flex-col">
          <h1>{`${oneDesign?.design?.noOfBedRooms} Bedrooms`}</h1>
          <h1 className="mobile:hidden mobile:text-center ">|</h1>
          <h1>{`${oneDesign?.design?.noOfBathRooms} Bathrooms`}</h1>
          <h1 className="mobile:hidden mobile:text-center ">|</h1>
          <h1>{`${oneDesign?.design?.areaInSquareFeet} Squarefeet`}</h1>
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="w-12 h-12 rounded-md overflow-hidden border-lightGrey border-[1px]">
            <Image
              width={100}
              height={100}
              src={oneDesign?.design?.architectImage?.secure_url} // Fallback to a default image if URL is not available
              alt="Architect Image"
              className="object-cover h-full w-full"
            />
          </div>

          <div>
            <div className="flex">
              <h1 className="">Location: </h1>
              <h1 className="pl-1 text-darkGrey">
                {oneDesign?.design?.location}
              </h1>
            </div>
            <div className="flex">
              <h1 className="">{`${oneDesign?.design?.profession} Name: `}</h1>
              <h1 className="pl-1 text-darkGrey">{`${oneDesign?.design?.architectName}`}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
