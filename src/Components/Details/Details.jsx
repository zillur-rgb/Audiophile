import React from "react";
import { useParams } from "react-router-dom";
import BannerInside from "../BannerInside.jsx/BannerInside";
import BestGear from "../BestGear/BestGear";
import Category from "../Category/Category";
import Footer from "../Footer/Footer";
import useAllProducts from "../Hooks/useAllProducts";
import Features from "./Features";
import Gallery from "./Gallery";
import Recommendation from "./Recommendation";
import SingleDetail from "./SingleDetail";

const Details = () => {
  const [allProducts] = useAllProducts();
  const params = useParams();
  console.log(allProducts);

  const exactProduct = allProducts.find(
    (product) => product.slug === params.product
  );

  console.log(exactProduct);

  return (
    <div>
      <BannerInside />
      <SingleDetail exactProduct={exactProduct} />
      <Features exactProduct={exactProduct} />
      <Gallery gallery={exactProduct?.gallery} />
      <Recommendation />
      <Category />
      <BestGear />
      <Footer />
    </div>
  );
};

export default Details;
