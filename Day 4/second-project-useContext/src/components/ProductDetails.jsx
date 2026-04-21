import React, { useContext } from "react";
import Offers from "./Offers";
import { MainButton } from "../StyledComponents/MainButton";
import { CartContext } from "../Context/CartContext";

function ProductDetails() {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="container mt-5 p-5">
      <div className="container">
        <div className="row">
          <div className="  col-sm-5 p-5 bg-light ">
            <h2 className="mb-5">ProductDetails</h2>
            <p className="fw-bold fs-5">
              ProductName: <span className="text-warning">Book</span>
            </p>
            <p className="fw-bold fs-5">
              ProductPrice: <span className="text-warning">20 $</span>
            </p>
            <MainButton
              className="btn btn-primary"
              onClick={() => setCart(cart + 1)}
            >
              Add to Cart
            </MainButton>
          </div>
          <Offers />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
