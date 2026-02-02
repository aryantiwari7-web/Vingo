import React from "react";
import assets from "../assets/assets";

function HeadingImage() {
  return (
    <div className="relative w-full p-3 bg-white overflow ">
      {/* Image */}
      <img
        src={assets.Mainimage}
        alt="Heading image"
        className="w-full h-[400px] object-cover rounded-3xl "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text content */}
      <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Order your favourite food here
        </h1>

        <p className="max-w-xl text-sm md:text-base text-gray-200">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
      </div>
    </div>
  );
}

export default HeadingImage;
