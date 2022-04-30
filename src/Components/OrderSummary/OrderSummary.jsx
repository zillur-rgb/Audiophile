import React, { useContext } from "react";
import CartContext from "../../CartContext";

const OrderSummary = () => {
  const { items } = useContext(CartContext);

  let sum = items.reduce(
    (prev, current) => prev + current.exactProduct.price * current.count,
    0
  );

  return (
    <div className="w-2/6">
      <h1 className="uppercase text-2xl font-medium">Order Summary</h1>
      <div>
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center justify-between my-4 ">
            <div className="info flex items-center">
              <img
                src={item.exactProduct.image.desktop}
                className="w-1/6"
                alt="cartImage"
              />
              <div className="ml-4">
                <p className=" font-medium">{item.exactProduct.shortName}</p>
                <p className="text-sm font-medium text-text-black">
                  €{item.exactProduct.price * item.count}
                </p>
              </div>
            </div>
            <p className="text-text-black font-medium">x{item.count}</p>
          </div>
        ))}
      </div>
      <div className=" h-px bg-lightGray"></div>
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-text-black font-light">Total</h1>
        <h1 className="text-black text-xl font-medium">€{sum}</h1>
      </div>
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-text-black  font-light">Shipping Cost</h1>
        <h1 className="text-black text-xl font-medium">€5</h1>
      </div>
      <div className="my-4 flex items-center justify-between">
        <h1 className="text-text-black font-light">Vat & Tax</h1>
        <h1 className="text-black text-xl font-medium">
          {((sum / 100) * 5).toFixed(2)}
        </h1>
      </div>
      <div className="my-8 flex items-center justify-between">
        <h1 className="text-text-black font-light">Grand Total</h1>
        <h1 className="text-orange text-xl font-semibold">
          {(sum + 5 + (sum / 100) * 5).toFixed(2)}
        </h1>
      </div>
      <button className="bg-orange w-full uppercase text-white py-3 rounded-md hover:bg-orange-light">
        Continue & Pay
      </button>
    </div>
  );
};

export default OrderSummary;
