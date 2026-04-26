import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AnotherButton } from "../StyledComponents/MainButton";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../Api/ProdductApi";

function ProductDetails() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const res = getProductById(id).then((res) => setProduct(res.data));
  }, [id]);

  console.log(product);
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center ">More Details</h1>

        <div className="border p-5 fs-3 rounded mt-5">
          <p className="lead fs-2">
            Product Id :{" "}
            <span className="fw-bold text-success">{product?.id}</span>
          </p>
          <p className="lead fs-2">
            Product Name :{" "}
            <span className="fw-bold text-success">{product?.name}</span>
          </p>
          <p className="lead fs-2">
            Product Price :
            <span className="fw-bold text-success">{product?.price}</span>
          </p>
          <div className="rate mb-5">
            <FaStar className="fs-4 text-warning mx-1" />
            <FaStar className="fs-4 text-warning mx-1" />
            <FaStar className="fs-4 text-warning mx-1" />
            <FaStar className="fs-4 text-warning mx-1" />
            <FaStar className="fs-4 text-warning mx-1" />
          </div>
          <Link to="/products">
            <AnotherButton>Back To Products</AnotherButton>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
