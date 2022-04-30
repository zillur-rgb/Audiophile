import React from "react";
import BannerInside from "../Components/BannerInside.jsx/BannerInside";
import BillingForm from "../Components/BillingForm/BillingForm";
import Footer from "../Components/Footer/Footer";

const Checkout = () => {
  return (
    <div>
      <BannerInside padding="py-24" text="checkout" />
      <div
        className="
    container w-5/6 lg:max-w-7xl mx-auto my-16 flex lg:flex-row flex-col items-center justify-between"
      >
        <BillingForm />
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
