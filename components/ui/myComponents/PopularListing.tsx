"use client";

import Link from "next/link";
import React from "react";
import ListingCard from "./ListingCard.jsx";
import { Loader } from "./Loader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const PopularListing = () => {
  const {
    data: allDesigns,
    isLoading: loading,
    isError,
  } = useQuery<any>({
    queryKey: ["ALLDESIGNS"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/v1/design`
      );
      return data;
    },
  });


  if (isError) return <p>Error fetching designs.</p>;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="my-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap">
            <div className=" flex items-center flex-col mb-8">
              <h1 className="text-3xl font-semibold">Popular Listing</h1>
              <div className="flex gap-1 my-4">
                <div className="w-14 h-[5px] rounded-full bg-primary"></div>
                <div className="w-4 h-[5px] rounded-full bg-primary"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-full justify-center">
            {allDesigns?.allListings?.length > 0 ? (
              allDesigns.allListings
                .filter((item: any) => item.popular === "true")
                .map((item: any, i: number) => (
                  <Link
                    key={i}
                    href={`/design/${item._id}`}
                    className="lg:w-[30%] w-full lg:h-[40vh] h-fit"
                  >
                    <ListingCard item={item} />
                  </Link>
                ))
            ) : (
              <p>No popular designs found.</p>
            )}
          </div>
          <div className="flex justify-center">
            <Link href={"/category"}>
              <button className="bg-primary text-white rounded-full text-sm px-6 py-2 mt-8 hover:bg-primary/90 transition-colors">
                Load More
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default PopularListing;
