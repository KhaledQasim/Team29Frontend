import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import tshirt1 from "./images/tshirts/1.png";
import tshirt2 from "./images/tshirts/2.png";
import tshirt3 from "./images/tshirts/3.png";
import tshirt4 from "./images/tshirts/4.png";
import tshirt5 from "./images/tshirts/5.png";
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
            <Card.Img variant="top" src={tshirt1}/>
            <Card.Body>
                <Card.Title>WeWear Men's Shorts</Card.Title>
                <Card.Text>
                    Basic Men's Shorts, Finished in Black.
                    Specially Designed for Warm Weather and Casual Occasions.
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
            <Card.Img variant="top" src={tshirt2}/>
            <Card.Body>
                <Card.Title>WeWear Women's Shorts</Card.Title>
                <Card.Text>
                    Basic Women's Shorts, Finished in Blue.
                    Specially Designed for Warm Weather and Casual Occasions.
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
            <Card.Img variant="top" src={tshirt3}/>
            <Card.Body>
                <Card.Title>WeWear Swimming Shorts</Card.Title>
                <Card.Text>
                    Unisex Shorts, Finished in Dark Red.
                    Suitable for Swimming and are typically made of quick-drying materials and feature a comfortable fit with an elastic waistband and drawstring closure.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" style={style}>£77.77</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <Card className="category" style={style}>
            <Card.Img variant="top" src={tshirt4}/>
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
            <Card.Img variant="top" src={tshirt5}/>
            <Card.Body>
                <Card.Title>WeWear Exclusive Shorts</Card.Title>
                <Card.Text>
                    Unisex Exclusive Shorts, Finished in Orange.
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