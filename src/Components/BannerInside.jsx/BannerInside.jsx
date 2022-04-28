import React from "react";
import Navbar from "../Navbar/Navbar";

const BannerInside = ({ text, padding }) => {
  return (
    <div className="bg-black w-screen">
      <div className="container w-5/6 lg:max-w-7xl mx-auto">
        <Navbar />
        <div className=" bg-divider h-px container mx-auto"></div>
        <h1
          className={`
        text-white uppercase font-medium text-4xl text-center py-${parseInt(
          padding
        )}
        `}
        >
          {text}
        </h1>
      </div>
    </div>
  );
};

export default BannerInside;
