import React from "react";
import { Card, Button, CardGroup } from "react-bootstrap";
import TshirtPlaceholder from "../Placeholder Images/TshirtPlaceholder.png";
import JumperPlaceholder from "../Placeholder Images/SweaterPlaceholder.png";
import JeansPlaceholder from "../Placeholder Images/JeansPlaceholder.png";
import ShortsPlaceholder from "../Placeholder Images/ShortsPlaceholder.png";
import JacketPlaceholder from "../Placeholder Images/JacketPlaceholder.png";
import "../App.css";
import { useNavigate } from "react-router-dom";

export default function Products() {
    const navigate = useNavigate();
    return (
        <><CardGroup>
            <Card className="category">
                <Card.Img variant="top" src={TshirtPlaceholder} />
                <Card.Body>
                    <Card.Title>T-Shirts</Card.Title>
                    <Card.Text>
                        View all of our items in our WeWear T-Shirts product category.
                    </Card.Text>
                    {/* to="/products/t-shirts" */}
                    <Button onClick={() => { navigate("/products/t-shirts"); } }>View T-Shirts</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <br></br>
            <Card className="category" >
                <Card.Img variant="top" className="jumperPlaceholder" src={JumperPlaceholder} />
                <Card.Body>
                    <Card.Title>Jumpers</Card.Title>
                    <Card.Text>
                        View all of our item in our WeWear Jumpers product category.
                    </Card.Text>
                    <Button onClick={() => { navigate("/products/jumpers"); } }>View Jumpers</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <br></br>
            <Card className="category" >
                <Card.Img variant="top" src={JeansPlaceholder} />
                <Card.Body>
                    <Card.Title>Jeans</Card.Title>
                    <Card.Text>
                        View all of our items in our WeWear Jeans product category.
                    </Card.Text>
                    <Button onClick={() => { navigate("/products/jeans"); } }>View Jeans</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <br></br>
            <Card className="category" >
                <Card.Img variant="top" src={ShortsPlaceholder} />
                <Card.Body>
                    <Card.Title>Shorts</Card.Title>
                    <Card.Text>
                        View all of our item in our WeWear Shorts product category.
                    </Card.Text>
                    <Button onClick={() => { navigate("/products/shorts"); } }>View Shorts</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <br></br>
            <Card className="category" >
                <Card.Img variant="top" src={JacketPlaceholder} />
                <Card.Body>
                    <Card.Title>Jackets</Card.Title>
                    <Card.Text>
                        View all of our items in our WeWear Jackets product category.
                    </Card.Text>
                    <Button onClick={() => { navigate("/products/jackets"); } }>View Jackets</Button>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup><br></br></>
    );
}