import React, { useEffect } from "react";
// import BestCategories from "../Landing/BestCategories";
// import ListingCard from "../Landing/ListingCard.jsx";
// import { Link, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllDesignsAction } from "../../redux/actions/designActions.js";
// import Loader from "./Loader.jsx";
import BestCategories from "@/components/ui/myComponents/BestCategories";
const CategoryPage = () => {
  //   const { category } = useParams();
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getAllDesignsAction());
  //   }, [category, dispatch]);

  //   const { allListings } = useSelector((state) => state.designReducer) || {
  //     allListings: [],
  //   };

  //   const { loading } = useSelector((state) => state.globalReducer);

  //   const filteredCategory = allListings
  //     ? allListings.filter((items) => {
  //         return items.category.toLowerCase().replace(/\s+/g, "-") === category;
  //       })
  //     : [];

  //   console.log(filteredCategory);
  const loading: boolean = false;
  return (
    <>
      {loading ? (
        // <Loader />
        <>loadinggg</>
      ) : (
        <div className="pb-20 px-6">
          <BestCategories />
          <div className="gridingMain">
            {/* {category === "all"
              ? allListings?.map((item, index) => {
                  return (
                    <Link key={index} to={`/design/${item._id}`}>
                      <ListingCard key={index} item={item} />
                    </Link>
                  );
                })
              : filteredCategory?.map((item, index) => {
                  return (
                    <Link key={index} to={`/design/${item._id}`}>
                      <ListingCard key={index} item={item} />
                    </Link>
                  );
                })} */}
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
