import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function ProductFormState({ setProducts, products }) {
  const [formValue, setFormValue] = useState({
    name: "",
    price: 0,
    shipping: false,
  });
  //   let myKey = "age";
  //   let age = 20;

  //   let person = {
  //     [myKey]: age,
  //   };
  const formInputHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    if (e.target.name === "freeShipping") {
      setFormValue({ ...formValue, shipping: e.target.checked });
    } else {
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const addnewProduct = (e) => {
    e.preventDefault();
    console.log(formValue);
    setProducts([...products, formValue]);
  };
  return (
    <div className="container p-5">
      <Form onSubmit={addnewProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            name="name"
            value={formValue.name}
            onChange={formInputHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={formValue.price}
            name="price"
            onChange={formInputHandler}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Free Shipping"
            checked={formValue.shipping}
            name="freeShipping"
            onChange={formInputHandler}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductFormState;
