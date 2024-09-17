"use client";
import React from "react";

import BestCategories from "@/components/ui/myComponents/BestCategories";
import { Loader } from "@/components/ui/myComponents/Loader";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import ListingCard from "@/components/ui/myComponents/ListingCard";
const CategoryPage = () => {
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

  console.log("homepage slace removed", allDesigns);
  console.log("allDesigns:", allDesigns);

  if (isError) return <p>Error fetching designs.</p>;
  return (
    <>
      <div className="pb-20 px-6">
        <BestCategories />
        <div className="">
          {loading === true ? (
            <Loader />
          ) : (
            <div className="flex flex-wrap gap-4 w-full justify-center">
              {allDesigns?.allListings?.map((item: any, i: number) => (
                <Link
                  key={i}
                  href={`/design/${item._id}`}
                  className="lg:w-[30%] w-full lg:h-[40vh] h-fit"
                >
                  <ListingCard item={item} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
