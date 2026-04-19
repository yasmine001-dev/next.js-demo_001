import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductForm({ setProducts, products }) {
  // uncontrolled component-- useRef عند الاؤسال
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    shipping: false,
  });
  const productRef = useRef();
  //   console.log(productRef.current.value);
  const priceRef = useRef();
  //   console.log(priceRef.current.value);
  const shippingRef = useRef();
  // controlled component-- useState لحظة ب لحظة

  const addNewProduct = (e) => {
    e.preventDefault();
    console.log(formValue);
    setProducts([...products, formValue]);
  };
  return (
    <div className="container p-5">
      <h1 className="text-center text-muted mb-5">ProductForm</h1>

      <Form onSubmit={addNewProduct}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter product name"
            value={formValue.name}
            ref={productRef}
            onChange={() =>
              setFormValue({ ...formValue, name: productRef.current.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter product price"
            value={formValue.price}
            ref={priceRef}
            onChange={() =>
              setFormValue({ ...formValue, price: priceRef.current.value })
            }
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Free Shipping"
            checked={formValue.shipping}
            ref={shippingRef}
            onChange={() => {
              setFormValue({
                ...formValue,
                shipping: shippingRef.current.checked,
              });
            }}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
