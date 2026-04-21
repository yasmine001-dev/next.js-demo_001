import React, { use, useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { LifeLine } from "react-loading-indicators";
import { useFetch } from "../custom/useFetch";

function User() {
  const {
    data: user,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <LifeLine color="#32cd32" size="medium" text="" textColor="" />
        </div>
      )}
      {error && (
        <div
          className="alert alert-danger text-center"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <p style={{ color: "red" }}>Error: {error}</p>
        </div>
      )}

      <div className="row">
        {user?.map((item) => (
          <div className="col-4" key={item.id}>
            <Card border="primary" style={{ width: "18rem" }}>
              <Card.Header>{item.name}</Card.Header>
              <Card.Body>
                <Card.Title>{item.username}</Card.Title>
                <Card.Text>{item.email}</Card.Text>
                <Card.Text>{item.address.street}</Card.Text>
                <Card.Text>{item.address.city}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default User;
