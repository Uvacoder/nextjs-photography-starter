import React from "react";

const Hero = ({ heading, message }) => {
  return (
    <div className="flex justify-center h-screen items-center mb-12 bg-fixed bg-cover custom-img bg-center">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-9 py-2 rounded-md border hover:bg-white hover:text-black">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Hero;
