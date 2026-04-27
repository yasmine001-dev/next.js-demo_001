import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Header() {
  const { count, name } = useSelector((state) => state.counterSlice);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        {console.log("render method")}
        <Container>
          <Navbar.Brand href="#home">Admin-dashboard {name} </Navbar.Brand>
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
              Products ({count})
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link text-danger" : "nav-link"
              }
              to="/counter"
            >
              Counter
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
