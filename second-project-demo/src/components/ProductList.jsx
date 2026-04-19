import React from "react";
import { Badge, Table } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function ProductList({ products }) {
  return (
    <div className="container p-5">
      <h1 className="text-center text-muted mb-5">ProductList</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Free Shipping</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.price} $</td>
              <td>
                {product.shipping ? (
                  <Badge bg="success">Yes</Badge>
                ) : (
                  <Badge bg="danger">No</Badge>
                )}
              </td>
              <td>
                <div className="d-flex gap-3 fs-4">
                  <MdDeleteForever color="red" size={30} />
                  <FaEdit color="blue" size={30} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductList;
