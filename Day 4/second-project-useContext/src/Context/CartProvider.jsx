import React, { useState } from "react";
import { CartContext } from "./CartContext";
import Offers from "../components/Offers";

function CartProvider(props) {
  const [cart, setCart] = useState(0);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
