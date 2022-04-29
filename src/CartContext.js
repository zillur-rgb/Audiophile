import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    setItems((prevState) => [...prevState, product]);
  };
  return (
    <CartContext.Provider value={{ items, setItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
