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
                <Card.Title>WeWear Men's Jeans</Card.Title>
                <Card.Text>
                    Basic Men's Jeans, Finished in Black.
                    Crafted from Premium Denim, our jeans feature a range of cuts and styles to suit every taste. 
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
                <Card.Title>WeWear Women's Jeans</Card.Title>
                <Card.Text>
                    Basic Women's Jeans, Finished in Blue.
                    Crafted from Premium Denim, our jeans feature a range of cuts and styles to suit every taste. 
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
                <Card.Title>WeWear Kids Jeggings</Card.Title>
                <Card.Text>
                    Basic Kids Jeggings, Finished in Red.
                    Made from a soft and stretchy blend of materials, our jeggings provide all-day comfort while still maintaining the look of classic denim jeans.
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
                <Card.Title>WeWear Skinny Jeans</Card.Title>
                <Card.Text>
                    Unisex Skinny Jeans, Finished in Green.
                    These jeans are designed to hug your curves and flatter your figure, making them the perfect choice for any occasion.
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
            <Card.Img variant="top" src={tshirt5} />
            <Card.Body>
                <Card.Title>WeWear Exclusive Jeans</Card.Title>
                <Card.Text>
                    Unisex Exclusive Jeans, Finished in Orange.
                    Suitable for exclusive events.
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