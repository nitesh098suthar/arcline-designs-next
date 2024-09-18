"use client";
import React, { useState } from "react";
import SwitchingButtons from "../components/SwitchingButtons";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import httpClient from "@/lib/httpClient";
import { useRouter } from "next/navigation";

function ProjectAdder() {
  const { toast } = useToast();
  const router = useRouter();
  const [input, setInput] = useState({
    designTitle: "",
    location: "",
    heightInFeet: "",
    widthInFeet: "",
    noOfBathRooms: "",
    noOfBedRooms: "",
    architectName: "",
    profession: "",
    popular: "false",
    category: "Residential",
    designDes: "",
  });
  const [architectImage, setArchitectImage] = useState(null);
  const [houseImage, setHouseImage] = useState(null);
  const [allImages, setAllImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const inputHandler = (e: any) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const numberInputHandler = (e: any) => {
    const value = e.target.value.replace(/\D/, "");
    setInput({ ...input, [e.target.name]: value });
  };

  const handleHouseImageChange = (e: any) => {
    setHouseImage(e.target.files[0]);
  };

  const handleArchitectImageChange = (e: any) => {
    setArchitectImage(e.target.files[0]);
  };

  const handleAllImagesChange = (e: any) => {
    setAllImages(e.target.files);
  };

  const mutation = useMutation({
    mutationFn: async (formData: FormData) => {
      return await httpClient.post("/design", formData);
    },
    onSuccess: () => {
      toast({
        title: "Project Added",
      });
      setIsSubmitting(false);
      router.push("/admin/show-projects");
    },
    onError: () => {
      toast({
        title: "Error while uploading project",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    e.preventDefault();
    console.log("enter in the handler function");
    const formData = new FormData();
    formData.append("designTitle", input.designTitle);
    formData.append("location", input.location);
    formData.append("heightInFeet", input.heightInFeet);
    formData.append("widthInFeet", input.widthInFeet);
    formData.append("noOfBathRooms", input.noOfBathRooms);
    formData.append("noOfBedRooms", input.noOfBedRooms);
    formData.append("architectName", input.architectName);
    formData.append("profession", input.profession);
    formData.append("popular", input.popular);
    formData.append("category", input.category);
    formData.append("designDes", input.designDes);

    if (architectImage) {
      formData.append("architectImage", architectImage);
    }

    if (houseImage) {
      formData.append("houseImage", houseImage);
    }

    for (const image of allImages) {
      formData.append("allImages", image);
    }
    console.log("gathered data");
    mutation.mutate(formData);
  };

  return (
    <>
      <div>
        <SwitchingButtons />
      </div>
      <div className="min-h-[60vh] p-6 w-[600px] mx-auto mobile:w-full pb-20">
        <div className="flex justify-center items-center">
          <div className="flex items-center flex-col mb-8">
            <h1 className="text-3xl font-semibold text-center">
              Create a new project
            </h1>
            <div className="flex gap-1 my-4">
              <div className="w-14 h-[5px] rounded-full bg-primary"></div>
              <div className="w-4 h-[5px] rounded-full bg-primary"></div>
            </div>
          </div>
        </div>
        <div className="bg-lightGrey border-primary p-6 rounded-lg w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Design Title</label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full"
                  type="text"
                  placeholder="Enter design title"
                  onChange={inputHandler}
                  value={input.designTitle}
                  name="designTitle"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Location</label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full"
                  type="text"
                  placeholder="Enter location"
                  onChange={inputHandler}
                  value={input.location}
                  name="location"
                />
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col space-y-2 w-full">
                  <label className="text-sm font-semibold">
                    Height in Feet
                  </label>
                  <input
                    className="bg-white p-2 outline-none rounded-md w-full"
                    type="text"
                    placeholder="Enter height in feet"
                    onChange={numberInputHandler}
                    value={input.heightInFeet}
                    name="heightInFeet"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <label className="text-sm font-semibold">Width in Feet</label>
                  <input
                    className="bg-white p-2 outline-none rounded-md w-full"
                    type="text"
                    placeholder="Enter width in feet"
                    onChange={numberInputHandler}
                    value={input.widthInFeet}
                    name="widthInFeet"
                  />
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex flex-col space-y-2 w-full">
                  <label className="text-sm font-semibold">
                    Number of Bathrooms
                  </label>
                  <input
                    className="bg-white p-2 outline-none rounded-md w-full"
                    type="text"
                    placeholder="Enter number of bathrooms"
                    onChange={numberInputHandler}
                    value={input.noOfBathRooms}
                    name="noOfBathRooms"
                  />
                </div>
                <div className="flex flex-col space-y-2 w-full">
                  <label className="text-sm font-semibold">
                    Number of Bedrooms
                  </label>
                  <input
                    className="bg-white p-2 outline-none rounded-md w-full"
                    type="text"
                    placeholder="Enter number of bedrooms"
                    onChange={numberInputHandler}
                    value={input.noOfBedRooms}
                    name="noOfBedRooms"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Architect Name</label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full"
                  type="text"
                  placeholder="Enter architect name"
                  onChange={inputHandler}
                  value={input.architectName}
                  name="architectName"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Profession</label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full"
                  type="text"
                  placeholder="Enter profession"
                  onChange={inputHandler}
                  value={input.profession}
                  name="profession"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Popular</label>
                <select
                  className="bg-white p-2 outline-none rounded-md w-full cursor-pointer"
                  onChange={inputHandler}
                  value={input.popular}
                  name="popular"
                >
                  <option value="false">False</option>
                  <option value="true">True</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Category</label>
                <select
                  className="bg-white p-2 outline-none rounded-md w-full cursor-pointer"
                  onChange={inputHandler}
                  value={input.category}
                  name="category"
                >
                  <option value="Residential">Residential</option>
                  <option value="Commercial Hospitality">
                    Commercial Hospitality
                  </option>
                  <option value="Exterior">Exterior</option>
                  <option value="Interior">Interior</option>
                  <option value="Temples">Temples</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">
                  Design Description
                </label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full"
                  type="text"
                  placeholder="Enter design description"
                  onChange={inputHandler}
                  value={input.designDes}
                  name="designDes"
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">House Thumbnail</label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full cursor-pointer"
                  type="file"
                  onChange={handleHouseImageChange}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">Architect Image</label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full cursor-pointer"
                  type="file"
                  onChange={handleArchitectImageChange}
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-semibold">
                  Additional Images
                </label>
                <input
                  className="bg-white p-2 outline-none rounded-md w-full cursor-pointer"
                  type="file"
                  multiple
                  onChange={handleAllImagesChange}
                />
              </div>
            </div>
            <button
              className={` p-2 w-full outline-none rounded-md text-white cursor-pointer ${
                isSubmitting
                  ? "bg-primary/50 "
                  : "bg-primary hover:bg-primary/90"
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating..." : "Create"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ProjectAdder;
