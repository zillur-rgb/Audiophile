import React from "react";
import { Link } from "react-router-dom";
import ScreenSize from "../ScreenSize/ScreenSize";

const SingleProductComponent = ({ product }) => {
  return (
    <div
      className={`
    container w-5/6 lg:max-w-7xl mx-auto my-16 flex lg:flex-row flex-col items-center justify-between
    `}
    >
      {product.id % 2 === 0 && (
        <>
          <ScreenSize image={product?.image} />

          <div className="right w-full lg:w-1/2 flex flex-col lg:items-start items-center">
            {product.new && (
              <p className="text-orange tracking-widest py-8 text-center lg:text-left">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-black text-3xl font-medium text-center lg:text-left">
              {product?.name}
            </h1>
            <p className="text-text-black text-sm font-normal leading-7 py-5 text-center lg:text-left">
              {product?.description}
            </p>

            <Link to={`/${product.category}/${product.slug}`}>
              <button className="py-4 uppercase px-7 rounded-md bg-orange text-white hover:bg-orange-light">
                see products
              </button>
            </Link>
          </div>
        </>
      )}

      {product.id % 2 !== 0 && (
        <>
          <div className="right w-full lg:w-1/2 flex flex-col lg:items-start items-center">
            {product.new && (
              <p className="text-orange tracking-widest py-8 text-center lg:text-left">
                NEW PRODUCT
              </p>
            )}
            <h1 className="text-black text-3xl font-medium text-center lg:text-left">
              {product?.name}
            </h1>
            <p className="text-text-black text-sm font-normal leading-7 py-5 text-center lg:text-left">
              {product?.description}
            </p>

            <Link to={`/${product.category}/${product.slug}`}>
              <button className="py-4 uppercase px-7 rounded-md bg-orange text-white hover:bg-orange-light">
                see products
              </button>
            </Link>
          </div>
          <ScreenSize image={product?.image} />
        </>
      )}
    </div>
  );
};

export default SingleProductComponent;
