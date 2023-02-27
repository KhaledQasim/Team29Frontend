import React from "react";
import image from "../components/weWEAR-12.png";
import { Col, Row, Card, Button } from "react-bootstrap";
import "../App.css"

export default function Products() {
    return (
        <Row xs={1} md={2} className="g-4">
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={image} style={{ width: "30rem" }} />
            <Card.Body>
              <Card.Title>T-Shirt</Card.Title>
              <Card.Text>
                Add description, colour range, size range, price, and two
                options (e.g., Buy Now, Add to Basket) in this text component.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    );
}






