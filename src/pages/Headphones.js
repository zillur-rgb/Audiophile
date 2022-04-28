import Footer from "../Components/Footer/Footer";
import Category from "../Components/Category/Category";
import BestGear from "../Components/BestGear/BestGear";
import BannerInside from "../Components/BannerInside.jsx/BannerInside";
import Products from "../Components/Products/Products";

const Headphones = () => {
  return (
    <div>
      <BannerInside padding="py-24" text="headphones" />
      <Products category="headphones" />
      <Category />
      <BestGear />
      <Footer />
    </div>
  );
};

export default Headphones;
