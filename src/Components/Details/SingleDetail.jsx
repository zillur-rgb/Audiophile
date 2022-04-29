import React, { useContext, useState } from "react";
import { HiPlusSm, HiMinusSm } from "react-icons/hi";
import CartContext from "../../CartContext";
import ScreenSize from "../ScreenSize/ScreenSize";

const SingleDetail = ({ exactProduct }) => {
  const [count, setCount] = useState(1);
  const { addToCart, items } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({ exactProduct, count });
  };

  console.log(items);

  return (
    <div className="container w-4/6 lg:max-w-7xl mx-auto my-16 flex flex-col lg:flex-row items-center">
      <ScreenSize image={exactProduct?.image} />

      <div className="right w-full lg:w-2/5 flex flex-col lg:items-start items-center mt-16 lg:mt-0 ml-0 lg:ml-32">
        {exactProduct?.new && (
          <p className="text-orange tracking-widest py-8 text-center lg:text-left ">
            NEW PRODUCT
          </p>
        )}
        <h1 className="text-black text-3xl font-medium text-center lg:text-left">
          {exactProduct?.name}
        </h1>
        <p className="text-text-black text-sm font-normal leading-7 py-5 text-center lg:text-left">
          {exactProduct?.description}
        </p>

        <h1 className="text-black text-xl pb-7 font-medium text-center lg:text-left">
          € {exactProduct?.price}
        </h1>

        <div className="add-cart-section flex">
          <div className="quantity flex items-center justify-center rounded-md bg-gray p-3 text-text-black">
            <HiMinusSm
              className="cursor-pointer"
              onClick={() => {
                if (count > 0) {
                  setCount(count - 1);
                } else {
                  return;
                }
              }}
            />
            <p className="mx-3 text-black font-semibold">{count}</p>
            <HiPlusSm
              className="cursor-pointer"
              onClick={() => setCount(count + 1)}
            />
          </div>
          <button
            className="uppercase py-3 rounded-md text-white hover:bg-orange-light mx-3 px-6 bg-orange text-xs font-medium"
            onClick={handleAddToCart}
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDetail;
