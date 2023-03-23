import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import black from "./images/tshirts/black.png";
import blue from "./images/tshirts/blue.png";
import red from "./images/tshirts/red.png";
import green from "./images/tshirts/green.png"
import orange from "./images/tshirts/orange.png"
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    return (
    <>
    <div className="backButton">
        <Button onClick={() => { navigate(-1); } }>&laquo; All Categories</Button>
    </div>        
    <CardGroup className="categories">
        <Card className="category" >
            <Card.Img variant="top" src={black} />
            <Card.Body>
                <Card.Title>WeWear Men's T-Shirt</Card.Title>
                <Card.Text>
                    Basic Men's T-Shirt, Finished in Satin Black.
                    Ideal for your daily use.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={blue} />
            <Card.Body>
                <Card.Title>WeWear Women's T-Shirt</Card.Title>
                <Card.Text>
                    Basic Women's Cropped T-Shirt, Finished in Navy Blue.
                    Ideal for your daily use.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={red} />
            <Card.Body>
                <Card.Title>WeWear Kids Short Sleeve T-Shirt</Card.Title>
                <Card.Text>
                    Kids Short Sleeve T-Shirt, Finished in Bright Red.
                    Affordable Ruff-n-Tuff Collection for Kids.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={green} />
            <Card.Body>
                <Card.Title>WeWear Oversized T-Shirt</Card.Title>
                <Card.Text>
                    Unisex Oversized T-Shirt, Finished in Olive Green.
                    Your Perfect Lounge Wear.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={orange} />
            <Card.Body>
                <Card.Title>WeWear Long Sleeve Shirt</Card.Title>
                <Card.Text>
                    Unisex Long Sleeve Shirt, Finished in Orange.
                    Suitable for Every Weather.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>    
    </CardGroup>
    <br></br></>
    );
}