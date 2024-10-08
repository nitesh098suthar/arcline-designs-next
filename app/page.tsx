"use client";
import BestCategories from "@/components/ui/myComponents/BestCategories";
import FeatureLocation from "@/components/ui/myComponents/FeatureLocation";
import Hero from "@/components/ui/myComponents/Hero";
import InfinitySlider from "@/components/ui/myComponents/InfiniteSlider";
import Insight from "@/components/ui/myComponents/Insight";
import PopularListing from "@/components/ui/myComponents/PopularListing";
import Testimonials from "@/components/ui/myComponents/Testimonials";
import React, { useState } from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <PopularListing />
      <Insight />
      <InfinitySlider />
      <FeatureLocation />
      <Testimonials />
    </div>
  );
};

export default page;
