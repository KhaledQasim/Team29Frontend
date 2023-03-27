import React, { useEffect, useState } from "react";
import { Card, Button, CardGroup, Row } from "react-bootstrap";

import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import TshirtPlaceholder from "../images/PlaceHolder/TshirtPlaceholder.png";
// import TshirtPlaceholder from "/images/PlaceHolder/TshirtPlaceholder.png";
// import JumperPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import JeansPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import ShortsPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import JacketPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
export default function Products() {
 
  const navigate = useNavigate();
 
  
 

  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
      <Row xs={2} md={5} className="g-0">
        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          <Card.Img
            variant="top"
            style={{ flexGrow: "inherit" }}
            src="/images/PlaceHolder/ShortsPlaceholder.png"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "3rem" }}>Shorts</Card.Title>
            {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
            {/* to="/products/t-shirts" */}
            <Button
              onClick={() => {
                navigate(`/productsCategory/Shorts`);
              }}
            >
              View Shorts
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          <Card.Img
            variant="top"
            style={{ flexGrow: "inherit" }}
            src="/images/PlaceHolder/TshirtPlaceholder.png"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "3rem" }}>T-Shirts</Card.Title>
            {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
            {/* to="/products/t-shirts" */}
            <Button
              onClick={() => {
                navigate(`/productsCategory/T-Shirts`);
              }}
            >
              View T-Shirts
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          <Card.Img
            variant="top"
            style={{ flexGrow: "inherit" }}
            src="/images/PlaceHolder/JacketPlaceholder.png"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "3rem" }}>Jackets</Card.Title>
            {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
            {/* to="/products/t-shirts" */}
            <Button
              onClick={() => {
                navigate(`/productsCategory/Jackets`);
              }}
            >
              View Jackets
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          <Card.Img
            variant="top"
            style={{ flexGrow: "inherit" }}
            src="/images/PlaceHolder/JeansPlaceholder.png"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "3rem" }}>Jeans</Card.Title>
            {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
            {/* to="/products/t-shirts" */}
            <Button
              onClick={() => {
                navigate(`/productsCategory/Jeans`);
              }}
            >
              View Jeans
            </Button>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem", marginRight: "1rem" }}>
          <Card.Img
            variant="top"
            style={{ flexGrow: "inherit" }}
            src="/images/PlaceHolder/SweaterPlaceholder.png"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "3rem" }}>Jumpers</Card.Title>
            {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
            {/* to="/products/t-shirts" */}
            <Button
              onClick={() => {
                navigate(`/productsCategory/Jumpers`);
              }}
            >
              View Jumpers
            </Button>
          </Card.Body>
        </Card>

       
      </Row>
    </div>
  );
}
