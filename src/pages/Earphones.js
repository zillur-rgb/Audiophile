import React from "react";
import BannerInside from "../Components/BannerInside.jsx/BannerInside";
import BestGear from "../Components/BestGear/BestGear";
import Category from "../Components/Category/Category";
import Footer from "../Components/Footer/Footer";

const Earphones = () => {
  return (
    <div>
      <BannerInside padding="24" text="earphones" />
      <Category />
      <BestGear />
      <Footer />
    </div>
  );
};

export default Earphones;
