import React from "react";
import speakerImg from "../../assets/images/home/desktop/image-speaker-zx9.png";

const SpeakerHome = () => {
  return (
    <div className="bg-orange mt-56 container mx-auto rounded-2xl px-8 lg:px-56 pt-44 bg-speaker-home bg-no-repeat bg-contain bg-center flex flex-col lg:flex-row items-start justify-between">
      <img
        src={speakerImg}
        className="w-3/4 mx-auto lg:w-2/5"
        alt="SpeakerImg"
      />

      <div className="texts w-4/5 md:w-2/5 mt-0 md:mt-4 mx-auto lg:mx-0 text-center lg:text-left">
        <h1 className="text-center lg:text-justify text-3xl sm:text-6xl uppercase font-semibold  text-white tracking-wide ">
          zx9 speaker
        </h1>
        <p className="text-text my-8">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button className="bg-black uppercase text-white py-4 px-12 rounded-md hover:opacity-80">
          see product
        </button>
      </div>
    </div>
  );
};

export default SpeakerHome;
