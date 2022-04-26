import React from "react";
import Button from "../Button/Button";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="bg-hero-mobile md:bg-hero-desktop h-full bg-cover bg-center bg-no-repeat w-full">
      <Navbar />
      <div className="texts container h-full mx-auto flex flex-col items-center md:items-start justify-center">
        <p className="text-text tracking-widest text-center">NEW PRODUCT</p>
        <h1 className="text-3xl xl:text-6xl uppercase font-medium text-white text-center md:text-left w-full md:w-1/3 leading-snug mt-4">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-text w-2/3 md:w-1/3 mt-4 leading-8 m:text-center">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Button label="See Products" />
      </div>
    </div>
  );
};

export default Banner;
