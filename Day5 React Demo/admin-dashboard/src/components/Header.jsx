import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Admin-dashboard</Navbar.Brand>
          <Nav className="ms-auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-danger" : "nav-link"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-danger" : "nav-link"
              }
              to="/products"
            >
              Products
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-danger" : "nav-link"
              }
              to="/Login"
            >
              Login
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
