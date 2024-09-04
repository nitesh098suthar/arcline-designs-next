// import React from "react";
// import Slider from "react-slick";
// import testimonials from "./testimonialData";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import testimonials from "./testimonialData";

// const Testimonials = () => {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <div className="flex justify-center flex-col">
//       <div className="flex items-center flex-col mb-8">
//         <h1 className="text-3xl font-semibold">Testimonial</h1>
//         <div className="flex gap-1 my-4">
//           <div className="w-14 h-[5px] rounded-full bg-primary"></div>
//           <div className="w-4 h-[5px] rounded-full bg-primary"></div>
//         </div>
//       </div>

//       <div className="mb-10 w-full">
//         <Slider {...settings}>
//           {testimonials.map((item, i) => (
//             <div
//               key={i}
//               className="bg-gray-100 p-6 h-[360px] rounded-lg border-gray-300 border-[1px] w-full"
//             >
//               <div className="grid place-items-center">
//                 <div className="w-[100px] rounded-full overflow-hidden h-[100px] border-gray-400 border-[1px]">
//                   <img src={item.userAvatar} alt="" className="h-[100%]" />
//                 </div>
//               </div>
//               <div className="">
//                 <h1 className="text-black text-center text-2xl font-bold mt-4 mobile:text-sm">
//                   {item.userName}
//                 </h1>
//                 <div className="flex justify-center py-3">
//                   <p className="text-primary text-center mobile:text-xs">
//                     {item.location}
//                   </p>
//                   <p className="text-primary text-center px-2 mobile:text-xs">
//                     at
//                   </p>
//                   <p className="text-primary text-center mobile:text-xs">
//                     {item.location}
//                   </p>
//                 </div>
//                 <p className="text-black text-center text-sm mobile:text-xs line-clamp-4">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React from "react";

const Testimonials = () => {
  return <div>Testimonials</div>;
};

export default Testimonials;
