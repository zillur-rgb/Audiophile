import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="bg-hero-mobile md:bg-hero-desktop sm:bg-hero-tablet h-full bg-cover bg-center bg-no-repeat w-full">
      <Navbar />
      <div className=" bg-divider h-px container mx-auto"></div>
      <div className="texts container h-full mx-auto flex flex-col items-center md:items-start justify-center">
        <p className="text-text tracking-widest text-center">NEW PRODUCT</p>
        <h1 className="text-3xl my-8 xl:text-6xl uppercase font-medium text-white text-center md:text-left w-full md:w-1/3 leading-snug mt-4">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-text w-2/3 md:w-1/3 mb-4 leading-8 m:text-center">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button className="uppercase font-medium px-12 py-4 bg-orange text-white hover:bg-orange-light">
          see products
        </button>
      </div>
    </div>
  );
};

export default Banner;
