import React from "react";
import imageheadphones from "../../assets/images/shared/desktop/image-headphones.png";
import imagespeakers from "../../assets/images/shared/desktop/image-speakers.png";
import imageearphones from "../../assets/images/shared/desktop/image-earphones.png";
import rightArrow from "../../assets/images/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

const Category = () => {
  const category = [
    {
      name: "Headphones",
      url: imageheadphones,
    },
    {
      name: "Speakers",
      url: imagespeakers,
    },
    {
      name: "Earphones",
      url: imageearphones,
    },
  ];
  return (
    <div className="container w-5/6 lg:max-w-7xl mx-auto relative grid grid-cols-1 md:grid-cols-3 gap-12">
      {category.map((cat, idx) => (
        <Link key={idx} to={`/${cat.name}`}>
          <div className="text-center flex justify-center flex-col items-center group cursor-pointer sm:mt-36 mt-28 sm:w-full w-4/5 container mx-auto">
            <img src={cat.url} alt="productPic" className="w-1/3 z-10" />
            <div className="bg-gray rounded-xl pt-28 pb-8 w-full -m-24 ">
              <p className="uppercase text-xl font-medium tracking-wider text-black">
                {cat.name}
              </p>

              <p className="button flex justify-center items-center uppercase text-black mt-2 group-hover:text-orange font-medium">
                Shop <img src={rightArrow} alt="img right" className="ml-4" />
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
