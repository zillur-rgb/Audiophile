import axios from "axios";
import { useEffect, useState } from "react";

const useAllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    axios
      .get("products.json")
      .then((res) => setAllProducts(res.data.products))
      .catch((err) => console.log(err.messsage));
  }, []);

  return [allProducts, setAllProducts];
};

export default useAllProducts;
