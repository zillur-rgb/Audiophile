import React from "react";

const Gallery = ({ gallery }) => {
  return (
    <div className="container w-4/6 lg:max-w-7xl mx-auto my-16 flex flex-col lg:flex-row items-center gap-8">
      <div className="container mx-auto">
        <img
          src={gallery?.first.desktop}
          className="mb-8 lg:w-full w-1/2 rounded-xl"
          alt="g"
        />
        <img
          src={gallery?.second.desktop}
          className="mt-8 lg:w-full w-1/2 rounded-xl"
          alt="g"
        />
      </div>
      <img src={gallery?.third.desktop} className="rounded-xl" alt="g" />
    </div>
  );
};

export default Gallery;
