"use client";

import Link from "next/link";
import React, { useEffect } from "react";
// import ListingCard from "./ListingCard.jsx";
// import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "./Loader";
// import { getAllDesignsAction } from "../../redux/actions/designActions.js";

const PopularListing = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllDesignsAction());
  // }, [dispatch]);

  // const { allListings } = useSelector((state) => state.designReducer);
  // const { loading } = useSelector((state) => state.globalReducer);
  // Ensure allListings is defined and not null
  // const popularListing = allListings
  //   ? allListings.filter((item) => {
  //       return item.popular === "true";
  //     })
  //   : [];
  const loading: boolean = false;
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="my-12 px-6">
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
            {/* {popularListing.map((item, i) => (
              <Link
                key={i}
                to={`/design/${item._id}`}
                className="lg:w-[30%] w-full lg:h-[40vh] h-fit"
              >
                <ListingCard item={item} />
              </Link>
            ))} */}
          </div>
          <div className="flex justify-center">
            <Link href={"category/all"}>
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
