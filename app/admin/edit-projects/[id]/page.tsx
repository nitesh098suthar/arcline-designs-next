import Link from "next/link";
import React, { useState, useEffect } from "react";
import SwitchingButtons from "../../components/SwitchingButtons";
// import axios from "axios";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import Loader from "../Layout/Loader";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   clearError,
//   clearMessage,
//   rej,
//   req,
//   res,
// } from "../../redux/reducers/globalReducer";
// import toast from "react-hot-toast";
// import { server } from "../../redux/store";

function ProjectUpdater() {
  // const { id } = useParams();

  // const [input, setInput] = useState({
  //   designTitle: "",
  //   location: "",
  //   heightInFeet: "",
  //   widthInFeet: "",
  //   noOfBathRooms: "",
  //   noOfBedRooms: "",
  //   architectName: "",
  //   profession: "",
  //   popular: "false",
  //   category: "Residential",
  //   designDes: "",
  // });

  // const [architectImage, setArchitectImage] = useState(null);
  // const [houseImage, setHouseImage] = useState(null);
  // const [allImages, setAllImages] = useState([]);
  // const [existingDesign, setExistingDesign] = useState(null);
  // const dispatch = useDispatch();
  // const { loading, error, message } = useSelector(
  //   (state) => state.globalReducer
  // );
  // const nav = useNavigate();

  // useEffect(() => {
  //   const fetchDesign = async () => {
  //     try {
  //       const response = await axios.get(
  //         `${server}/api/v1/design/${id}`
  //       );
  //       setExistingDesign(response.data.oneDesign);
  //       setInput({
  //         designTitle: response.data.oneDesign.designTitle,
  //         location: response.data.oneDesign.location,
  //         heightInFeet: response.data.oneDesign.heightInFeet,
  //         widthInFeet: response.data.oneDesign.widthInFeet,
  //         noOfBathRooms: response.data.oneDesign.noOfBathRooms,
  //         noOfBedRooms: response.data.oneDesign.noOfBedRooms,
  //         architectName: response.data.oneDesign.architectName,
  //         profession: response.data.oneDesign.profession,
  //         popular: response.data.oneDesign.popular.toString(),
  //         category: response.data.oneDesign.category,
  //         designDes: response.data.oneDesign.designDes,
  //       });
  //     } catch (error) {
  //       console.error("Error fetching design data", error);
  //     }
  //   };

  //   fetchDesign();
  // }, [id]);

  // const inputHandler = (e) => {
  //   setInput({ ...input, [e.target.name]: e.target.value });
  // };

  // const numberInputHandler = (e) => {
  //   const value = e.target.value.replace(/\D/, "");
  //   setInput({ ...input, [e.target.name]: value });
  // };

  // const handleHouseImageChange = (e) => {
  //   setHouseImage(e.target.files[0]);
  // };

  // const handleArchitectImageChange = (e) => {
  //   setArchitectImage(e.target.files[0]);
  // };

  // const handleAllImagesChange = (e) => {
  //   setAllImages(e.target.files);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append("designTitle", input.designTitle);
  //   formData.append("location", input.location);
  //   formData.append("heightInFeet", input.heightInFeet);
  //   formData.append("widthInFeet", input.widthInFeet);
  //   formData.append("noOfBathRooms", input.noOfBathRooms);
  //   formData.append("noOfBedRooms", input.noOfBedRooms);
  //   formData.append("architectName", input.architectName);
  //   formData.append("profession", input.profession);
  //   formData.append("popular", input.popular);
  //   formData.append("category", input.category);
  //   formData.append("designDes", input.designDes);

  //   if (architectImage) {
  //     formData.append("architectImage", architectImage);
  //   }

  //   if (houseImage) {
  //     formData.append("houseImage", houseImage);
  //   }

  //   for (const image of allImages) {
  //     formData.append("allImages", image);
  //   }

  //   try {
  //     dispatch(req());
  //     const response = await axios.put(
  //       `${server}/api/v1/design/${id}`,
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //         withCredentials: true,
  //       }
  //     );
  //     dispatch(res(response.data));
  //     toast.success("Project updated successfully.");
  //     dispatch(clearMessage());
  //     nav("/admin");
  //   } catch (error) {
  //     dispatch(rej(error.response?.data?.message));
  //     toast.error(error.response?.data?.message || "An error occurred.");
  //     dispatch(clearError());
  //   }
  // };

  // if (!existingDesign) {
  //   return <Loader />;
  // }
  const loading: boolean = false;

  return (
    <>
      {loading ? (
        // <Loader />
        <></>
      ) : (
        <>
          <div>
            <SwitchingButtons />
          </div>
          <div className="min-h-[60vh] p-6 w-[600px] mx-auto mobile:w-full pb-20">
            <div className="flex justify-center items-center">
              <div className="flex items-center flex-col mb-8">
                <h1 className="text-3xl font-semibold text-center">
                  Update Project
                </h1>
                <p className="text-center text-sm mt-2">
                  If you do not add any image in image fields then old images
                  will be deleted on save.
                </p>
                <div className="flex gap-1 my-4">
                  <div className="w-14 h-[5px] rounded-full bg-primary"></div>
                  <div className="w-4 h-[5px] rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
            <div className="bg-lightGrey border-primary p-6 rounded-lg w-full">
              <form
                //  onSubmit={handleSubmit}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">
                      Design Title
                    </label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="text"
                      placeholder="Enter Design Title"
                      // onChange={inputHandler}
                      // value={input.designTitle}
                      name="designTitle"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">Location</label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="text"
                      placeholder="Enter Location"
                      // onChange={inputHandler}
                      // value={input.location}
                      name="location"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2 w-full">
                      <label className="text-sm font-semibold">
                        Height in Feet
                      </label>
                      <input
                        className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                        type="text"
                        placeholder="Enter Height in Feet"
                        // onChange={numberInputHandler}
                        // value={input.heightInFeet}
                        name="heightInFeet"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                      <label className="text-sm font-semibold">
                        Width in Feet
                      </label>
                      <input
                        className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                        type="text"
                        placeholder="Enter Width in Feet"
                        // onChange={numberInputHandler}
                        // value={input.widthInFeet}
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
                        className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                        type="text"
                        placeholder="Enter Number of Bathrooms"
                        // onChange={numberInputHandler}
                        // value={input.noOfBathRooms}
                        name="noOfBathRooms"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                      <label className="text-sm font-semibold">
                        Number of Bedrooms
                      </label>
                      <input
                        className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                        type="text"
                        placeholder="Enter Number of Bedrooms"
                        // onChange={numberInputHandler}
                        // value={input.noOfBedRooms}
                        name="noOfBedRooms"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">
                      Architect Name
                    </label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="text"
                      placeholder="Enter Architect Name"
                      // onChange={inputHandler}
                      // value={input.architectName}
                      name="architectName"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">Profession</label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="text"
                      placeholder="Enter Profession"
                      // onChange={inputHandler}
                      // value={input.profession}
                      name="profession"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex flex-col space-y-2 w-full">
                      <label className="text-sm font-semibold">
                        Design Description
                      </label>
                      <input
                        type="text"
                        className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                        placeholder="Enter Design Description"
                        // onChange={inputHandler}
                        // value={input.designDes}
                        name="designDes"
                      />
                    </div>
                    <div className="flex flex-col space-y-2 w-full">
                      <label className="text-sm font-semibold">Popular</label>
                      <select
                        className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                        // onChange={inputHandler}
                        // value={input.popular}
                        name="popular"
                      >
                        <option value="false">False</option>
                        <option value="true">True</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">Category</label>
                    <select
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      // onChange={inputHandler}
                      // value={input.category}
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
                      House Thumbnail
                    </label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="file"
                      // onChange={handleHouseImageChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">
                      Architect Image
                    </label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="file"
                      // onChange={handleArchitectImageChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-semibold">
                      Additional Images
                    </label>
                    <input
                      className="bg-white p-2 outline-none rounded-md w-full border-[1px] border-gray-300"
                      type="file"
                      multiple
                      // onChange={handleAllImagesChange}
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Link
                    href={"/admin"}
                    className="px-4 py-2 bg-transparent text-primary border-[1px] border-primary rounded-md hover:bg-primary hover:text-white transition w-full"
                  >
                    <button type="submit" className="w-full">
                      Cancel
                    </button>
                  </Link>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition w-full"
                  >
                    Project
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectUpdater;
