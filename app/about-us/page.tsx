import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-[60vh] py-10">
      <div className="flex justify-center items-center">
        <div className="flex items-center flex-col mb-8">
          <h1 className="text-3xl font-semibold text-center">
            About Us & Our Story
          </h1>
          <div className="flex gap-1 my-4">
            <div className="w-14 h-[5px] rounded-full bg-primary"></div>
            <div className="w-4 h-[5px] rounded-full bg-primary"></div>
          </div>
        </div>
      </div>

      <div className="p-8 bg-white text-black text-justify">
        <div className="max-w-4xl mx-auto">
          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p>
              At Arcline Designs, we blend timeless principles with cutting-edge
              design and technology to create spaces that inspire and endure.
              Our team of skilled architects and designers is committed to
              delivering exceptional projects tailored to meet the unique needs
              of our clients.
            </p>
            <br />
            <a href="" className="font-semibold text-primary hover:text-primary/80">Ar. Ankit Vishwakarma</a>
          </section>

          <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p>
              Our journey in the architecture industry began with my
              grandfather, whose dedication and hard work laid the foundation
              for our family legacy. My father then took up the mantle,
              innovating and expanding our operations, refining processes, and
              driving growth. Today, we proudly present our work, standing as a
              testament to their vision and perseverance.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
