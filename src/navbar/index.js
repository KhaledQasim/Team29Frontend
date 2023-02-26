import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";


import ajax from "../services/fetchService";
import { useAtom } from "jotai";
import { jwtAtom } from "../App";

function Navbarr() {
  
  const navigate = useNavigate();
  const [isValid , setIsValid] = useState();
  const [jwt,setJwt] = useAtom(jwtAtom);
  useEffect(() => {
    if (jwt){
      ajax(`/auth/validate`, "get", jwt).then((isValid) => {
        setIsValid(isValid);
      });
    };
  }, [jwt]);


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
            <Nav.Link as={Link} to="/products">
              Products
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
          {/* <Nav className="me-auto">
            <Nav.Link as={Link} to="/AddProduct">
              Add Product
            </Nav.Link>
          </Nav> */}
          <Nav className="me-auto">
            {isValid ? (
              <Button
                variant="secondary"
                onClick={() => {
                  fetch("/auth/logout").then((response) => {
                    if (response.status === 200){
                      setJwt(null);
                      navigate("/")
                      window.location.reload(); 
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
