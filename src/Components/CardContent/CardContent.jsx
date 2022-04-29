import React, { useContext } from "react";
import CartContext from "../../CartContext";

const CardContent = () => {
  const { items, setItems } = useContext(CartContext);

  let sum = items.reduce(
    (prev, current) => prev + current.exactProduct.price * current.count,
    0
  );

  console.log(sum);

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  return (
    <div>
      <ul className="p-6">
        <div className="flex sm:flex-row flex-col items-center justify-between pb-2">
          <h1 className="text-black text-2xl font-medium">
            Cart {items.length}
          </h1>
          <p
            className=" cursor-pointer underline text-text-black hover:text-black"
            onClick={handleRemoveAllItems}
          >
            Remove All
          </p>
        </div>
        {items.map((item, idx) => (
          <li
            key={idx}
            className="flex items-center justify-between sm:flex-row flex-col py-1"
          >
            <div className="flex items-center sm:flex-row flex-col justify-between">
              <img
                src={item.exactProduct.image.mobile}
                alt="cartImage"
                className="w-12 rounded-lg mr-6"
              />
              <p className="text-black font-medium">{item.exactProduct.name}</p>
            </div>
            <div className="price flex items-center justify-center sm:flex-row flex-col mr-2">
              <p>{item.count}x</p>
              <p className="text-text-black ml-2">
                ${item.exactProduct.price * item.count}
              </p>
            </div>
          </li>
        ))}
        <div className="total flex items-center justify-between  mt-4 sm:flex-row flex-col">
          <p className="text-text-black">Total</p>
          <p className="text-3xl font-semibold text-black">${sum}</p>
        </div>
      </ul>
    </div>
  );
};

export default CardContent;
