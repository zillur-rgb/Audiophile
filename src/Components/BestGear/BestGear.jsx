import BestGearImg from "../../assets/images/shared/desktop/image-best-gear.jpg";

const BestGear = () => {
  return (
    <div className="container w-5/6 lg:max-w-7xl mx-auto lg:flex items-center gap-12">
      <div className="texts w-full lg:w-1/2 md:text-left text-center">
        <h1 className="text-black text-5xl tracking-normalWide font-medium">
          BRINGING YOU THE <span className="text-orange">BEST</span> AUDIO GEAR
        </h1>
        <p className="text-black opacity-60 my-12 font-light leading-8">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        src={BestGearImg}
        alt="BestGearImg"
        className="w-full lg:w-1/2 rounded-2xl"
      />
    </div>
  );
};

export default BestGear;
