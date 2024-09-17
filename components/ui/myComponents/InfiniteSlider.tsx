import SliderCard from "./SliderCard";

const InfinitySlider = () => {
  return (
    <>
      <div className="px-6 my-12">
      <div className="flex justify-center items-center">
        <div className=" flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold">Featured Location</h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
        <div className="sliderWrapper overflow-hidden">
          <SliderCard />
        </div>
      </div>
    </>
  );
};

export default InfinitySlider;
