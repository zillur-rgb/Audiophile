import React from "react";
import Banner from "../Components/Banner/Banner";
import Category from "../Components/Category/Category";
import SpeakerHome from "../Components/SpeakerHome/SpeakerHome";
import SpeakerZX7 from "../Components/SpeakerZX7/SpeakerZX7";

const Home = () => {
  return (
    <div className="h-screen">
      <Banner />
      <Category />
      <SpeakerHome />
      <SpeakerZX7 />
    </div>
  );
};

export default Home;
