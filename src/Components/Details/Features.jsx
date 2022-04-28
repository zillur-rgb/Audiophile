import React from "react";

const Features = ({ exactProduct }) => {
  return (
    <div className="container w-4/6 lg:max-w-7xl mx-auto my-32 flex flex-col lg:flex-row items-start">
      <div className="Features lg:w-1/2 w-full mb-16 lg:mb-0">
        <h1 className="uppercase text-4xl font-medium mb-6">Features</h1>
        <p className="text-text-black text-md leading-7">
          {exactProduct?.features}
        </p>
      </div>
      <div className="included ml-0 lg:ml-32">
        <h1 className="uppercase text-4xl font-medium mb-6">in the box</h1>
        <ul>
          {exactProduct?.includedItems.map((item, idx) => (
            <li className="mb-4 text-text-black" key={idx}>
              <span className="text-orange mr-2  font-semibold">
                {item.quantity}x
              </span>{" "}
              {item.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
