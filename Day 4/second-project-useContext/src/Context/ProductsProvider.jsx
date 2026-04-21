import React from "react";
import { ProductsContext } from "./ProductsContext";
import img1 from "../assets/hero.png";
import img2 from "../assets/ramadanrecipe_recipe_1284_317c83b072f-60f1-4476-9cbe-c2c5851f5755.jpg";
const productsData = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 1200,
    image: img2,
    description: "Apple's latest flagship phone.",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: 1100,
    image: img2,
    description: "Samsung's top-tier smartphone.",
  },
  {
    id: 3,
    name: "Google Pixel 8 Pro",
    price: 950,
    image: img2,
    description: "Google's best camera phone.",
  },
];

function ProductsProvider(props) {
  return (
    <div>
      <ProductsContext.Provider value={{ products: productsData }}>
        {props.children}
      </ProductsContext.Provider>
    </div>
  );
}

export default ProductsProvider;
