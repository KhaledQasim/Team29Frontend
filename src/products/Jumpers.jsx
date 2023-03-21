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
                <Card.Title>WeWear Men's Jumper</Card.Title>
                <Card.Text>
                      Basic Regular Fit Men's Jumper, Finished in Satin Black.
                      Perfect for Chilly Days and Staylish Addition to any Wardrobe.
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
                <Card.Title>WeWear Women's Jumper</Card.Title>
                <Card.Text>
                     Basic Regular Fit Women's Jumper, Finished in Navy Blue.
                     Perfect for Chilly Days and Staylish Addition to any Wardrobe.
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
                <Card.Title>WeWear Kids Short Sleeve Jumper</Card.Title>
                <Card.Text>
                     Basic Regular Fit Kids Short Sleeve Jumper, Finished in Red.
                     Perfect for Chilly Days and Staylish Addition to any Wardrobe.
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
                <Card.Title>WeWear Oversized Jumper</Card.Title>
                <Card.Text>
                     Basic Regular Fit Unisex Overszed Jumper, Finished in Light Green.
                     Perfect for Chilly Days and Staylish Addition to any Wardrobe.
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
                <Card.Title>WeWear Long Sleeve Jumper</Card.Title>
                <Card.Text>
                     Basic Regular Fit Unisex Long Sleeves Jumper, Finished in Orange.
                     Perfect for Chilly Days and Staylish Addition to any Wardrobe.
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