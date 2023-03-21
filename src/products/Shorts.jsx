import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import black from "./images/tshirts/black.png";
import blue from "./images/tshirts/blue.png";
import red from "./images/tshirts/red.png";
import green from "./images/tshirts/green.png"
import orange from "./images/tshirts/orange.png"
import style from "../App.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    return (
    <>
    <div className="backButton">
        <Button onClick={() => { navigate(-1); } }>&laquo; All Categories</Button>
    </div> 
    <CardGroup className="categories">
        <Card className="category" style={style}>
            <Card.Img variant="top" src={black} />
            <Card.Body>
                <Card.Title>WeWear Men's Shorts</Card.Title>
                <Card.Text>
                     Basic Men's Shorts, Finished in Black.
                     Specially Designed for Warm Weather and Casual Ocassions.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={blue} />
            <Card.Body>
                <Card.Title>WeWear Women's Shorts</Card.Title>
                <Card.Text>
                     Basic Women's Shorts, Finished in Blue.
                     Specially Designed for Warm Weather and Casual Ocassions.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={red} />
            <Card.Body>
                <Card.Title>WeWear Swimming Shorts</Card.Title>
                <Card.Text>
                     Unisex Shorts, Finished in Dark Red.
                     Suitable for Swimming and are typically made of quick-drying materials and feature a comfortable fit with an elastic waistband and drawstring closure."
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={green} />
            <Card.Body>
                <Card.Title>WeWear Knee-Length Shorts</Card.Title>
                <Card.Text>
                    Unisex Knee-Length Shorts, Finished in Green.
                    Ideal for daily wear.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={orange} />
            <Card.Body>
                <Card.Title>WeWear Exclusive Shorts</Card.Title>
                <Card.Text>
                     Unisex Exlusive Shorts, Finished in Orange.
                     Suitable for Exclusive Events.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </CardGroup>
    <br></br>
    </>
    );
}