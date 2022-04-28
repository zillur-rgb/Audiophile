import React from "react";
import ScreenSize from "../ScreenSize/ScreenSize";

const SingleProductComponent = ({ product }) => {
  return (
    <div
      className={`
    container w-5/6 lg:max-w-7xl mx-auto my-16 flex lg:${
      product.id % 2 === 0 ? "flex-row-reverse" : "flex-row"
    } flex-col items-center justify-between
    `}
    >
      <ScreenSize image={product?.image} />

      <div className="right w-full lg:w-1/2 flex flex-col lg:items-start items-center">
        <p className="text-orange tracking-widest py-8 text-center lg:text-left">
          NEW PRODUCT
        </p>
        <h1 className="text-black text-3xl font-medium text-center lg:text-left">
          {product?.name}
        </h1>
        <p className="text-text-black text-sm font-normal leading-7 py-5 text-center lg:text-left">
          {product?.description}
        </p>

        <button className="py-4 px-10 rounded-md bg-orange text-white hover:bg-orange-light">
          see products
        </button>
      </div>
    </div>
  );
};

export default SingleProductComponent;
