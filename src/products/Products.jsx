import React, { useEffect, useState } from "react";
import { Card, Button, CardGroup, Row } from "react-bootstrap";

import "../App.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import TshirtPlaceholder from "../images/PlaceHolder/TshirtPlaceholder.png";
// import TshirtPlaceholder from "/images/PlaceHolder/TshirtPlaceholder.png";
// import JumperPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import JeansPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import ShortsPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
// import JacketPlaceholder from "../../public/images/PlaceHolder/TshirtPlaceholder.png";
export default function Products() {
  const [imagesPath] = [
    {
      "T-Shirts": "/images/PlaceHolder/TshirtPlaceholder.png",
      Shorts: "/images/PlaceHolder/ShortsPlaceholder.png",
      Jackets: "/images/PlaceHolder/JacketPlaceholder.png",
      Jeans: "/images/PlaceHolder/JeansPlaceholder.png",
      Jumpers: "/images/PlaceHolder/SweaterPlaceholder.png",
    },
  ];
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const loadProducts = async () => {
    await axios.get("/products").then((data) => setProducts(data.data));
  };
  const decidePath = (key) => {
    if ( key === "Shorts" ){
        return imagesPath.Shorts;
    }
      
    if ( key === "T-Shirts" ){
        return imagesPath["T-Shirts"];
    }

    if ( key === "Jackets" ){
        return imagesPath.Jackets;
    } 
     
    if ( key === "Jeans" ){
        return imagesPath.Jeans;
    }

    if ( key === "Jumpers" ){
        return imagesPath.Jumpers;
    }    
  }
  useEffect(() => {
    loadProducts();
   
  }, []);

  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
      <Row xs={2} md={5} className="g-0">
        {products.map((product) => (
          <Card style={{ width: "18rem", marginRight: "1rem" }}>
            <Card.Img
              variant="top"
              style={{ flexGrow: "inherit"}}
              src={decidePath(product.category)}
            />
            <Card.Body>
              <Card.Title style={{fontSize:"3rem"}} >{product.category}</Card.Title>
              {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
              {/* to="/products/t-shirts" */}
              <Button   
                onClick={() => {
                  navigate(`/productsCategory/${product.category}`);
                }}
              >
                View {product.category}
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
}
