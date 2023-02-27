import React, { useEffect } from "react";
import { Button } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";


import ajax from "../services/fetchService";
import { useAtom } from "jotai";
import { Atomlogged, jwtAtom } from "../App";

function Navbarr() {
  
  const navigate = useNavigate();
  // const [isValid , setIsValid] = useState("");
  const [jwt,setJwt] = useAtom(jwtAtom);
  const [isLogged, setIsLogged] = useAtom(Atomlogged);
  useEffect(() => {
    if (jwt){
      ajax(`/auth/validate`, "get", jwt).then((isLogged) => {
        // setIsValid(isValid);
        setIsLogged(isLogged);
      });
    };
  }, [jwt, setIsLogged]);


  return (
    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand as={Link} to="/">
    //       React-Bootstrap
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link as={Link} to="/">
    //           Home
    //         </Nav.Link>
    //         <Nav.Link as={Link} to="/products">
    //           Products
    //         </Nav.Link>
    //         {isLogged ? <Nav.Link as={Link} to="/profile">
    //           My Profile
    //         </Nav.Link>
    //         : <></>
    //         }
            
    //       </Nav>
       
    //       <Nav className="me-auto">
    //         {isLogged ? (
              // <Button
              //   variant="secondary"
              //   onClick={() => {
              //     fetch("/auth/logout").then((response) => {
              //       if (response.status === 200){
              //         setJwt(null);
              //         navigate("/");
              //         setIsLogged(false); 
              //       }
              //     })
              //   }}
              // >
              //   Logout
              // </Button>
    //         ) : (
    //           <Nav className="me-auto">
    //             <Nav.Link as={Link} to="/login">
    //               Login
    //             </Nav.Link>
    //             <Nav.Link as={Link} to="/register">
    //               Register
    //             </Nav.Link>
    //           </Nav>
    //         )}
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <>
    <meta charSet="UTF-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
      integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
      crossOrigin="anonymous"
      referrerPolicy="no-referrer"
    />
 
    <link rel="stylesheet" href="bootstrap-5.0.2-dist/css/bootstrap.min.css" />
    
    <Navbar className="navbar navbar-expand-lg navbar-light bg-white py-4 ">
    <div className="container">
      <a
        className="navbar-brand d-flex justify-content-between align-items-centerorder-lg-0 "
        href="index.html"
      >
        <img src="images/we_WEAR-8.png" width="125px" alt="site icon" />
      </a>
      <div className="order-lg-2 nav-btns">
        <button type="button" className="btn position-relative">
          <i className="fa fa-shopping-cart" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
            1
          </span>
        </button>
        <button type="button" className="btn position-relative">
          <i className="fa fa-heart" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
            1
          </span>
        </button>
        <button type="button" className="btn position-relative">
          <i className="fa fa-search" />
        </button>
      </div>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse order-lg-1" id="navMenu">
        <ul className="navbar-nav mx-auto text-center">
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#header">
              home
            </a>
          </li>
          <li className="nav-item px-2 py-2">
            <Link className="nav-link text-uppercase text-dark" to="/products">
              collection
            </Link>
          </li>
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#about">
              about us
            </a>
          </li>
          {isLogged ?
          <>
            <li className="nav-item px-2 py-2 border-0">
              <Link className="nav-link text-uppercase text-dark" to="/profile">
                My Profile
              </Link>
            </li>
            <Button
                variant="secondary"
                onClick={() => {
                  fetch("/auth/logout").then((response) => {
                    if (response.status === 200){
                      setJwt(null);
                      navigate("/");
                      setIsLogged(false); 
                    }
                  })
                }}
              >
                Logout
            </Button>
          </>
          :
          <>
            <li className="nav-item px-2 py-2 border-0">
              <Link className="nav-link text-uppercase text-dark" to="/login">
                Login
              </Link>
            </li>
          
            <li className="nav-item px-2 py-2 border-0">
              <Link className="nav-link text-uppercase text-dark" to="/register">
                Register
              </Link>
            </li>
          </>
          }
         
        </ul>
      </div>
    </div>
  </Navbar>
  </>
  );
}
export default Navbarr;
