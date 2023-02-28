import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import image from "./images/weWEAR-12.png";
import style from "../App.css";
import { Navigate, useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    return (
    <><CardGroup>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>T-Shirts</Card.Title>
                <Card.Text>
                    View all of our items in our WeWear T-Shirts product category.
                </Card.Text>
                {/* to="/products/t-shirts" */}
                <Button  onClick={() => {navigate("/products/t-shirts");}} variant="primary">View T-Shirts</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Jumpers</Card.Title>
                <Card.Text>
                    View all of our item in our WeWear Jumpers product category.
                </Card.Text>
                <Button variant="primary">View Jumpers</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Jeans</Card.Title>
                <Card.Text>
                    View all of our items in our WeWear Jeans product category.
                </Card.Text>
                <Button variant="primary">View Jeans</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardGroup>
    <br></br>
    <CardGroup>
        <Card className="category2" style={style}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Shorts</Card.Title>
                <Card.Text>
                    View all of our item in our WeWear Shorts product category.
                </Card.Text>
                <Button variant="primary">View Shorts</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category2" style={style}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>Jackets</Card.Title>
                <Card.Text>
                    View all of our items in our WeWear Jackets product category.
                </Card.Text>
                <Button variant="primary">View Jackets</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardGroup><br></br></>
    );
}