import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import jeans1 from "./images/jeans/16.png";
import jeans2 from "./images/jeans/17.png";
import jeans3 from "./images/jeans/18.png";
import jeans4 from "./images/jeans/19.png";
import jeans5 from "./images/jeans/20.png";
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
            <Card.Img variant="top" src={jeans1}/>
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
            <Card.Img variant="top" src={jeans2}/>
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
            <Card.Img variant="top" src={jeans3}/>
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
            <Card.Img variant="top" src={jeans4}/>
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
            <Card.Img variant="top" src={jeans5} />
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