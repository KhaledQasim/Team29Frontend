import React, { useEffect, useState } from "react";
import { Card, Button, CardGroup, Row } from "react-bootstrap";

import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
// import TshirtPlaceholder from "../images/PlaceHolder/TshirtPlaceholder.png";
// import TshirtPlaceholder from "/images/PlaceHolder/TshirtPlaceholder.png";
// import JumperPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import JeansPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import ShortsPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import JacketPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
const Container = styled.div`
  margin-left: 1rem;
  margin-top : 1rem;
  
`;

const StyledCard = styled(Card)`
  display: flex;
  
  flex: 1;
  margin-right: 1rem;
  margin-bottom: 1rem;
  @media (max-width: 1200px) {
    flex: 50%;
    margin-bottom: 1rem;
  }
  @media (max-width: 800px) {
    flex: 100%;
    margin-bottom: 1rem;
  }
`;

const CardImage = styled(Card.Img)`
  flex-grow: inherit;
  
`;

// style={{ width: "18rem", marginRight: "1rem", flex:1 }}
export default function Products() {

  const navigate = useNavigate();

  return (
    <Container className="content-container">
      <Row xs={2} md={2} xl={2} className="g-0">
        <StyledCard className="card">
          <CardImage
            variant="top"
            style={{}}
            src="/images/PlaceHolder/ShortsPlaceholder.png"
          />
          <Card.Body>
            <Card.Title style={{ fontSize: "3rem" }}>Shorts</Card.Title>
            {/* <Card.Text>x
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
        </StyledCard>

        <StyledCard>
          <CardImage
            variant="top"
            style={{}}
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
        </StyledCard>

        <StyledCard>
          <CardImage
            variant="top"
            style={{}}
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
        </StyledCard>

        <StyledCard>
          <CardImage
            variant="top"
            style={{}}
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
        </StyledCard>

        <StyledCard>
          <CardImage
            variant="top"
            style={{}}
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
        </StyledCard>
      </Row>
    </Container>
  );
}
