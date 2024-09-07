'use client'
import BestCategories from "@/components/ui/myComponents/BestCategories";
import FeatureLocation from "@/components/ui/myComponents/FeatureLocation";
import Hero from "@/components/ui/myComponents/Hero";
import Insight from "@/components/ui/myComponents/Insight";
import PopularListing from "@/components/ui/myComponents/PopularListing";
import Testimonials from "@/components/ui/myComponents/Testimonials";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <BestCategories />
      <PopularListing />
      <Insight />
      <FeatureLocation />
      <Testimonials />
    </div>
  );
};

export default page;
