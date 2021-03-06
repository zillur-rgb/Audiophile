import React from "react";
import BannerInside from "../../Components/BannerInside.jsx/BannerInside";
import BestGear from "../../Components/BestGear/BestGear";
import Category from "../../Components/Category/Category";
import Footer from "../../Components/Footer/Footer";
import Products from "../../Components/Products/Products";

const Earphones = () => {
  return (
    <div>
      <BannerInside padding="py-24" text="earphones" />
      <Products category="earphones" />
      <Category />
      <BestGear />
      <Footer />
    </div>
  );
};

export default Earphones;
