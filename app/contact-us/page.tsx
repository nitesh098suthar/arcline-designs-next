import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { contactUsAction } from "../../redux/actions/otherAction";
// import toast from "react-hot-toast";
// import { clearError, clearMessage } from "../../redux/reducers/globalReducer";
// import Loader from "./Loader";

const ContactUs = () => {
  // const [input, setInput] = useState({
  //   name: "",
  //   phone: "",
  //   message: "",
  // });

  // const dispatch = useDispatch();
  // const inputHandler = (e) => {
  // setInput({ ...input, [e.target.name]: e.target.value });
  //   console.log(input);
  // };

  // const submitHandler = async () => {
  //   dispatch(contactUsAction(input.name, input.phone, input.message));
  //   setInput({
  //     name: "",
  //     phone: "",
  //     message: "",
  //   });
  // };
  // const { loading, error, message } = useSelector(
  //   (state) => state.globalReducer
  // );
  // useEffect(() => {
  //   if (error) {
  //     toast.error(error);
  //     dispatch(clearError());
  //   }
  //   if (message) {
  //     toast.success("Message sent successfully.");
  //     dispatch(clearMessage());
  //   }
  // }, [dispatch, clearMessage, clearError, message, error, toast]);

  const loading: boolean = false;
  return loading ? (
    // <Loader />
    <>loading</>
  ) : (
    <div className="min-h-[60vh] p-10 w-[600px] mx-auto mobile:w-[380px]">
      <div className="flex justify-center items-center ">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold text-center">
            Contact Us Form
          </h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
      <div className=" bg-lightGrey border-primary p-6 rounded-lg w-full">
        <div className="w-full  mb-3">
          <p>Name</p>
          <input
            // onChange={inputHandler}
            name="name"
            // value={input.name}
            type="text"
            placeholder="Enter your name"
            className="bg-whtie p-2 outline-none rounded-md w-full"
          />
        </div>
        <div className="w-full  mb-3">
          <p>Phone Number</p>
          <input
            // onChange={inputHandler}
            name="phone"
            // value={input.phone}
            type="text"
            placeholder="Enter your phone"
            className="bg-whtie p-2 outline-none rounded-md w-full"
          />
        </div>
        <div className="w-full  mb-3">
          <p>Message</p>
          <textarea
            // onChange={inputHandler}
            name="message"
            // value={input.message}
            placeholder="Your message"
            id=""
            rows={4}
            className="bg-whtie p-2 outline-none resize-none rounded-md w-full"
          ></textarea>
        </div>
        <div>
          <button
            // onClick={submitHandler}
            className="text-white bg-primary p-2 w-full outline-none rounded-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
