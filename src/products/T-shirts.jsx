import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import tshirt1 from "./images/tshirts/1.png";
import tshirt2 from "./images/tshirts/2.png";
import tshirt3 from "./images/tshirts/3.png";
import tshirt4 from "./images/tshirts/4.png";
import tshirt5 from "./images/tshirts/5.png";
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
            <Card.Img variant="top" src={tshirt1}/>
            <Card.Body>
                <Card.Title>WeWear Men's T-Shirt</Card.Title>
                <Card.Text>
                    Basic Men's T-Shirt, Finished in Satin Black.
                    Ideal for your daily use.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£8.00</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={tshirt2} />
            <Card.Body>
                <Card.Title>WeWear Women's T-Shirt</Card.Title>
                <Card.Text>
                    Basic Women's Cropped T-Shirt, Finished in Navy Blue.
                    Ideal for your daily use.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£9.00</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={tshirt3}/>
            <Card.Body>
                <Card.Title>WeWear Kids Short Sleeve T-Shirt</Card.Title>
                <Card.Text>
                    Kids Short Sleeve T-Shirt, Finished in Bright Red.
                    Affordable Ruff-n-Tuff Collection for Kids.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£10.00</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={tshirt4} />
            <Card.Body>
                <Card.Title>WeWear Oversized T-Shirt</Card.Title>
                <Card.Text>
                    Unisex Oversized T-Shirt, Finished in Olive Green.
                    Your Perfect Lounge Wear.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£11.00</strong></Card.Text>
                <Button variant="primary">Add To Basket</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
        <br></br>
        <Card className="category" >
            <Card.Img variant="top" src={tshirt5}/>
            <Card.Body>
                <Card.Title>WeWear Long Sleeve Shirt</Card.Title>
                <Card.Text>
                    Unisex Long Sleeve Shirt, Finished in Orange.
                    Suitable for Every Weather.
                </Card.Text>
                <Card.Text><strong className="tshirt-price" >£12.00</strong></Card.Text>
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