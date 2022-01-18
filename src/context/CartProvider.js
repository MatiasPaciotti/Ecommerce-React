import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
  const initialCart = [];

  const [cart, setCart] = useState(initialCart);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
