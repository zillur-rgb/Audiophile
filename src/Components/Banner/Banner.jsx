import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="bg-hero-mobile lg:bg-hero-desktop sm:bg-hero-tablet bg-right bg-no-repeat bg-cover w-screen h-700">
      <div className="w-5/6 lg:max-w-7xl container mx-auto">
        <Navbar />
        <div className=" bg-divider h-px container mx-auto"></div>
        <div className="texts container h-full mx-auto flex flex-col items-center lg:items-start py-40">
          <p className=" xl:mx-0 text-text tracking-widest text-center mx-auto">
            NEW PRODUCT
          </p>
          <h1 className="text-3xl my-8 xl:text-6xl uppercase font-medium text-white text-center xl:text-left w-full xl:w-1/3 leading-snug mt-4">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="text-text w-2/3 xl:w-1/3 mb-4 leading-8 xl:mx-0  mx-auto xl:text-left text-center">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <button className="uppercase font-medium px-8 py-3 xl:mx-0 mx-auto rounded-md bg-orange text-white hover:bg-orange-light">
            see products
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
