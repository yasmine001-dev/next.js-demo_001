import React from "react";
import { AnotherButton } from "../StyledComponents/MainButton";
import { useSelector } from "react-redux";

function Home() {
  const { products, isLoading, error } = useSelector(
    (state) => state.productSlice,
  );
  console.log(products);
  return (
    <>
      <div className="container mt-5 alert alert-primary">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          voluptate cumque! Doloribus, magnam. Voluptas, voluptate cumque!
          Doloribus, magnam.
        </p>
        <AnotherButton>Click Me</AnotherButton>
      </div>
      <div className="container mt-5 alert alert-primary">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          voluptate cumque! Doloribus, magnam. Voluptas, voluptate cumque!
          Doloribus, magnam.
        </p>
        <AnotherButton>Click Me</AnotherButton>
      </div>
      <div className="container mt-5 alert alert-primary">
        <h1>Home page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
          voluptate cumque! Doloribus, magnam. Voluptas, voluptate cumque!
          Doloribus, magnam.
        </p>
        <AnotherButton>Click Me</AnotherButton>
      </div>
    </>
  );
}

export default Home;
