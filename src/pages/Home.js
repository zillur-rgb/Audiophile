import React from "react";
import Banner from "../Components/Banner/Banner";
import BestGear from "../Components/BestGear/BestGear";
import Category from "../Components/Category/Category";
import Footer from "../Components/Footer/Footer";
import SpeakerHome from "../Components/SpeakerHome/SpeakerHome";
import SpeakerZX7 from "../Components/SpeakerZX7/SpeakerZX7";
import YX1Earphones from "../Components/YX1Earphones/YX1Earphones";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <SpeakerHome />
      {/* <SpeakerZX7 /> */}
      <YX1Earphones />
      <BestGear />
      <Footer />
    </div>
  );
};

export default Home;
