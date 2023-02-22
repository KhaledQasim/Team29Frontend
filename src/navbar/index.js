import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import jwt_decode from "jwt-decode";

import { Link, useNavigate } from "react-router-dom";

import { useUser } from "../userProvider";
import ajax from "../services/fetchService";

function Navbarr() {
  const user = useUser();
  const navigate = useNavigate();
  const [isValid , setIsValid] = useState();

  useEffect(() => {
    if (user.jwt || user){
      ajax(`/auth/validate`, "get", user.jwt).then((isValid) => {
        setIsValid(isValid);
      });
    };
  }, [user, user.jwt]);


  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/test">
              Test
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/AddProduct">
              Add Product
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            {isValid ? (
              <Button
                variant="secondary"
                onClick={() => {
                  fetch("/auth/logout").then((response) => {
                    if (response.status === 200){
                      user.setJwt(null);
                      navigate("/")
                    }
                  })
                }}
              >
                Logout
              </Button>
            ) : (
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </Nav>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navbarr;
