import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, SetProducts] = useState([]);
  const loadProductsByCategory = async () => {
    await axios
      .get(`/productsCategory/${category}`)
      .then((data) => SetProducts(data.data));
     
  };
  useEffect(() => {
    loadProductsByCategory();
    
  }, []);

  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
      <Row xs={2} md={5} className="g-0">
        {products.map((product) => (
          <Card style={{ width: "18rem", marginRight: "1rem" }}>
            <Card.Img
              variant="top"
              style={{ flexGrow: "inherit" }}
              src={product.image}
            />
            <Card.Body>
              <Card.Title style={{fontSize:"3rem"}} >{product.category}</Card.Title>
              {/* <Card.Text>
                View all of our items in our WeWear T-Shirts product category.
              </Card.Text> */}
              {/* to="/products/t-shirts" */}
              <Button   
                onClick={() => {
                  navigate(`/products/${product.id}`);
                }}
              >
                View Item
              </Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default CategoryProducts;
