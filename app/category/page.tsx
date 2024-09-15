import React, { useEffect } from "react";

import BestCategories from "@/components/ui/myComponents/BestCategories";
const CategoryPage = () => {

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
           
          </div>
        </div>
      )}
    </>
  );
};

export default CategoryPage;
