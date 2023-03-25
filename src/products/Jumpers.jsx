import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import jumper1 from "./images/jumpers/6.png";
import jumper2 from "./images/jumpers/7.png";
import jumper3 from "./images/jumpers/8.png";
import jumper4 from "./images/jumpers/9.png";
import jumper5 from "./images/jumpers/10.png";
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
            <Card.Img variant="top" src={jumper1}/>
            <Card.Body>
                <Card.Title>WeWear Men's Jumper</Card.Title>
                <Card.Text>
                    Basic Regular Fit Men's Jumper, Finished in Satin Black.
                    Perfect for Chilly Days and Stylish Addition to any Wardrobe.
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
            <Card.Img variant="top" src={jumper2}/>
            <Card.Body>
                <Card.Title>WeWear Women's Jumper</Card.Title>
                <Card.Text>
                    Basic Regular Fit Women's Jumper, Finished in Navy Blue.
                    Perfect for Chilly Days and Stylish Addition to any Wardrobe.
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
            <Card.Img variant="top" src={jumper3}/>
            <Card.Body>
                <Card.Title>WeWear Kids Short Sleeve Jumper</Card.Title>
                <Card.Text>
                    Basic Regular Fit Kids Short Sleeve Jumper, Finished in Red.
                    Perfect for Chilly Days and Stylish Addition to any Wardrobe.
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
            <Card.Img variant="top" src={jumper4}/>
            <Card.Body>
                <Card.Title>WeWear Oversized Jumper</Card.Title>
                <Card.Text>
                    Basic Regular Fit Unisex Oversized Jumper, Finished in Light Green.
                    Perfect for Chilly Days and Stylish Addition to any Wardrobe.
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
            <Card.Img variant="top" src={jumper5}/>
            <Card.Body>
                <Card.Title>WeWear Long Sleeve Jumper</Card.Title>
                <Card.Text>
                    Basic Regular Fit Unisex Long Sleeves Jumper, Finished in Orange.
                    Perfect for Chilly Days and Stylish Addition to any Wardrobe.
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