import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";

import { Link, useNavigate } from "react-router-dom";

import jwt_decode from "jwt-decode";

import ajax from "../services/fetchService";
import { useAtom } from "jotai";
import {
  AtomAdmin,
  Atomlogged,
  jwtAtom,
} from "../App";

import {
  Popover,
} from "@mui/material";

import axios from "axios";

function Navbarr() {
  // const [role] = useState(getJwtAuth);
  const navigate = useNavigate();
  // const [isValid , setIsValid] = useState("");
  const [jwt, setJwt] = useAtom(jwtAtom);
  const [isLogged, setIsLogged] = useAtom(Atomlogged);
  const [isAdmin, setAdmin] = useAtom(AtomAdmin);
  const [lowStocks, setLowStock] = useState([]);
  const [noStocks, setNoStock] = useState([]);
  // code for popper to work (notification bell dropdown menu)
  const [anchorEl, setAnchorEl] = React.useState(null);
  const loadNotifications = async () => {
    const LowStock = await axios.get("/api/notifications/low-stock");
    setLowStock(LowStock.data);
    const NoStock = await axios.get("/api/notifications/no-stock");
    setNoStock(NoStock.data);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  
  useEffect(() => {
    const interval = setInterval(() => {
      loadNotifications();
    }, 4000);
  
    return () => clearInterval(interval); 
  }, [])
  useEffect(() => {
    console.log("use")
    loadNotifications();
    if (jwt) {
      ajax(`/auth/validate`, "get", jwt).then((isLogged) => {
        // setIsValid(isValid);
        setIsLogged(isLogged);
        const decodedJwt = jwt_decode(jwt);
        let role = JSON.stringify(decodedJwt.authorities);
        if (role.includes("ADMIN")) {
          setAdmin(true);
        }
      });
    }
  }, [jwt, setAdmin, setIsLogged]);

  return (
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

      <Navbar className="navbar navbar-expand-lg navbar-light bg-white py-4 ">
        <div className="container">
          <a
            className="navbar-brand d-flex justify-content-between align-items-centerorder-lg-0 "
            href="index.html"
          >
            <img
              src="../../images/we_WEAR-8.png"
              width="125px"
              alt="site icon"
            />
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
                22
              </span>
            </button>
            <button type="button" className="btn position-relative">
              <i className="fa fa-search" />
            </button>
            {isAdmin ? (
              <>
                <Button
                  aria-describedby={id}
                  variant="contained"
                  onClick={handleClick}
                >
                  <span className="badge bg-primary">{ noStocks.length + lowStocks.length }</span>
                  <i className="fa fa-bell" />
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Table hover>
                    <thead>
                      <tr>
                        {
                          noStocks.length === 0  && lowStocks.length === 0 ?
                          <th>No notifications</th>
                          : noStocks.length === 0 ?
                            <></>
                          :<th>OUT OF STOCK</th>
                        }
                        
                      </tr>
                    </thead>
                    <tbody>
                      {noStocks.map((noStock, index) => (
                        <tr key={index + 1}>
                          <td>{noStock.name  + " in category: " + noStock.category + " has no stock left!"}</td>
                        </tr>
                      ))}
                    </tbody>

                    <thead>
                      {
                        lowStocks.length === 0 ?
                        <></>
                        :
                        <tr>
                          <th>LOW STOCK</th>
                        </tr>
                      }
                      
                    </thead>
                    <tbody>
                      {lowStocks.map((lowStock, index) => (
                        <tr key={index + 1}>
                          <td>{lowStock.name  + " in category: " + lowStock.category + " has remaining quantity of " + lowStock.quantity + "!"}</td>
                        </tr>
                      ))}
                      
                    </tbody>
                  </Table>
                </Popover>
              </>
            ) : (
              // &&
              // <Link className="nav-link text-uppercase text-dark" to="/admin">
              //   admin
              // </Link>
              <></>
            )}
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
                <Link className="nav-link text-uppercase text-dark" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link text-uppercase text-dark"
                  to="/basket"
                >
                  Basket
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link text-uppercase text-dark"
                  to="/products"
                >
                  collection
                </Link>
              </li>
              <li className="nav-item px-2 py-2">
                <Link
                  className="nav-link text-uppercase text-dark"
                  to="/aboutus"
                >
                       About Us
                </Link>
              </li>
              {isAdmin ? (
                <li className="nav-item px-2 py-2 border-0">
                  <Link
                    className="nav-link text-uppercase text-dark"
                    to="/admin"
                  >
                    Admin
                  </Link>
                </li>
              ) : (
                <></>
              )}
              {isLogged ? (
                <>
                  <li className="nav-item px-2 py-2 border-0">
                    <Link
                      className="nav-link text-uppercase text-dark"
                      to="/profile"
                    >
                      My Profile
                    </Link>
                  </li>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      fetch("/auth/logout").then((response) => {
                        if (response.status === 200) {
                          setJwt(null);
                          window.location.reload();
                          navigate("/");
                          setIsLogged(false);
                        }
                      });
                    }}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <li className="nav-item px-2 py-2 border-0">
                    <Link
                      className="nav-link text-uppercase text-dark"
                      to="/login"
                    >
                      Login
                    </Link>
                  </li>

                  <li className="nav-item px-2 py-2 border-0">
                    <Link
                      className="nav-link text-uppercase text-dark"
                      to="/register"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Navbar>
    </>
  );
}
export default Navbarr;
