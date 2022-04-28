import React from "react";
import { Link } from "react-router-dom";
import useAllProducts from "../Hooks/useAllProducts";
import ScreenSize from "../ScreenSize/ScreenSize";

const Recommendation = () => {
  const [allProducts] = useAllProducts();
  const shuffledProducts = allProducts.sort(() => 0.5 - Math.random());

  const recom = shuffledProducts.slice(0, 3);
  console.log(recom);
  return (
    <div className="container w-4/6 lg:max-w-7xl mx-auto my-16">
      <h1 className="uppercase text-center text-4xl font-medium">
        you may also like
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {recom.map((rec) => (
          <div key={rec.id} className="mt-16">
            {/* <ScreenSize image={rec?.image} /> */}
            <img src={rec?.image?.mobile} alt="rec" className="rounded-2xl" />
            <h1 className="text-center uppercase text-xl font-medium mt-8 text-black">
              {rec.name}
            </h1>
            <Link
              className="flex items-center justify-center"
              to={`/${rec.category}/${rec.slug}`}
            >
              <button className="py-4 uppercase px-7 mt-4 rounded-md bg-orange text-white hover:bg-orange-light ">
                see products
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
