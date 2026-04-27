import React, { use, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { AnotherButton } from "../StyledComponents/MainButton";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProductAction } from "../store/slices/productSlice";

function ProductForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [productForm, setProductForm] = useState({
    name: "",
    price: 0,
  });

  const dispatch = useDispatch();
  const inputHandler = (e) => {
    setProductForm({ ...productForm, [e.target.name]: e.target.value });
  };

  // useEffect(() => {
  //   // Fetch product details if editing an existing product
  //   if (id !== "0") {
  //     getProductById(id).then((res) => setProductForm(res.data));
  //   }
  // }, [id]);

  const AddNewProduct = async (e) => {
    e.preventDefault();
    if (id === "0") {
      // await addProduct(productForm);
      dispatch(addProductAction(productForm));
      navigate("/products");
    } else {
      // Update product logic here (not implemented in this snippet)
      await updateProduct(id, productForm);
      navigate("/products");
    }
  };
  return (
    <>
      <div className="container mt-5 p-5">
        <h1 className="text-center text-muted mb-5">Product Form</h1>
        <Form onSubmit={AddNewProduct}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter product name"
              value={productForm.name}
              onChange={inputHandler}
              name="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label> Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter price"
              value={productForm.price}
              onChange={inputHandler}
              name="price"
            />
          </Form.Group>
          {id === "0" ? (
            <AnotherButton type="submit">Add Product</AnotherButton>
          ) : (
            <AnotherButton type="submit">Update Product</AnotherButton>
          )}
        </Form>
      </div>
    </>
  );
}

export default ProductForm;
