import React from "react";
import assets from "../assets/assets";

function HeadingImage() {
  return (
    <div className="w-full bg-gray-100 rounded-5xl pt-3 pb-4">
      <img
        src={assets.Mainimage}
        alt="Heading image"
        className="w-80% h-60% justify-center pl-[70px]"
      />
    </div>
  );
}

export default HeadingImage;

