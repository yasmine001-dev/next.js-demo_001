import React, { useContext } from "react";
import { CustomButton } from "../StyledComponents/MainButton";
import { CartContext } from "../Context/CartContext";

function Offers() {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="col-sm-6 border border-success">
      <h2 className="text-center mt-5 ">Offers</h2>
      <p>Your Product is Cart :{cart}</p>
      <CustomButton
        className="btn btn-primary"
        onClick={() => setCart(cart + 1)}
      >
        Add to Cart
      </CustomButton>
    </div>
  );
}

export default Offers;
