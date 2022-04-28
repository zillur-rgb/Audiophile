import Footer from "../Components/Footer/Footer";
import Category from "../Components/Category/Category";
import BestGear from "../Components/BestGear/BestGear";
import BannerInside from "../Components/BannerInside.jsx/BannerInside";

const Headphones = () => {
  return (
    <div>
      <BannerInside padding="24" text="headphones" />
      <Category />
      <BestGear />
      <Footer />
    </div>
  );
};

export default Headphones;
