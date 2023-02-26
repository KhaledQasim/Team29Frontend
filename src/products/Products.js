import React from "react";
import image from "../components/weWEAR-12.png";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

function Products() {
    return (
        <><br></br><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>WeWear T-Shirt</Card.Title>
                <Card.Text>
                    Description of the clothing item, which includes
                    material, size range, colour range, and add to basket
                    options and the price.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        <br></br><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>WeWear Jeans</Card.Title>
                <Card.Text>
                    Description of the clothing item, which includes
                    material, size range, colour range, and add to basket
                    options and the price.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card>
        <br></br><Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>WeWear Shorts</Card.Title>
                <Card.Text>
                    Description of the clothing item, which includes
                    material, size range, colour range, and add to basket
                    options and the price.
                </Card.Text>
                <Button variant="primary">More Details</Button>
            </Card.Body>
        </Card></>
    );
}

export default Products;






