import React, { useState } from "react";
import ProductFormState from "../components/ProductFormState";
// import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState([]);
  console.log("products", products);
  return (
    <>
      {/* <ProductForm products={products} setProducts={setProducts} /> */}
      <ProductFormState products={products} setProducts={setProducts} />
      <ProductList products={products} />
    </>
  );
}

export default Home;
