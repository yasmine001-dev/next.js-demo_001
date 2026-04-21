import React from "react";
import Home from "../pages/Home";
import CartProvider from "../Context/CartProvider";
import ProductDetails from "../components/ProductDetails";
import ProductsProvider from "../Context/ProductsProvider";

function MainLayout() {
  return (
    <>
      <CartProvider>
        <ProductsProvider>
          <Home />
        </ProductsProvider>
      </CartProvider>
    </>
  );
}

export default MainLayout;
