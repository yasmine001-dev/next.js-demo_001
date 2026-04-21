import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import { ProductsContext } from "../Context/ProductsContext";
import { Col, Row } from "react-bootstrap";

function Cards() {
  const { products } = useContext(ProductsContext);
  console.log(products);
  return (
    <div>
      <Row>
        {products.map((product) => (
          <Col sm={4} md={4} lg={4} key={product.id} className="mb-4">
            <Card style={{ width: "18rem" }} key={product.id}>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Title>{product.price} $</Card.Title>
                <Card.Text>{product.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
