import React, { useEffect, useState } from "react";
import { AnotherButton } from "../StyledComponents/MainButton";
import { Table } from "react-bootstrap";
import { FaEdit, FaEye } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import { deleteProduct, getAllProduct } from "../Api/ProdductApi";

// const BASE_URL = "http://localhost:3003/products";
function Products() {
  const [products, setProducts] = useState([]);
  //axios
  // useEffect(() => {
  //   // Fetch products from API or context here
  //   (async function fetchProducts() {
  //     try {
  //       const response = await axios.get(BASE_URL);
  //       // console.log(response.data);
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    const res = getAllProduct().then((res) => setProducts(res.data));
    console.log(res);
  }, []);

  console.log(products);

  const deleteHandler = async (id) => {
    try {
      console.log(id);
      await deleteProduct(id);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <>
      <div className="container mt-5 p-5">
        <h1 className="text-center text-muted">Our Products</h1>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search Product... "
            className="w-50"
          />

          <Link to="0/edit">
            <AnotherButton>Add New Product</AnotherButton>
          </Link>
        </div>

        <div className="container mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Id</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price} $</td>
                  <td>
                    <div className="d-flex justify-content-between">
                      <Link to={`${product.id}/edit`}>
                        <FaEdit size={30} color="green" />
                      </Link>
                      <Link to={`${product.id}`}>
                        <FaEye size={30} color="blue" />
                      </Link>
                      <MdDeleteForever
                        size={30}
                        color="red"
                        onClick={() => deleteHandler(product.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Products;
