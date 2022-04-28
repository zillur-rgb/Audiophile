import React from "react";
import useAllProducts from "../Hooks/useAllProducts";
import SingleProductComponent from "../SingleProductComponent/SingleProductComponent";

const Products = ({ category }) => {
  const [allProducts] = useAllProducts();

  const exactProducts = allProducts.filter(
    (prod) => prod.category === category
  );

  console.log(exactProducts);
  return (
    <div>
      {exactProducts.map((product) => (
        <SingleProductComponent key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
