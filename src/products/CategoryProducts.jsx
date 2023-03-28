import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const loadProductsByCategory = async () => {
    await axios.get(`/productsCategory/${category}`)
      .then((data) => setProducts(data.data));
  };

  useEffect(() => {
    loadProductsByCategory();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search products by name"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Form>
      <Row xs={2} md={5} className="g-0">
        {filteredProducts.map((product) => (
          <Card style={{ width: "18rem", marginRight: "1rem", flexGrow: "1", marginBottom: "1rem" }}>
            <Card.Img
              variant="top"
              style={{ flexGrow: "inherit" }}
              src={product.image}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "3rem" }}>{product.name}</Card.Title>
              <Button onClick={() => navigate(`/products/${product.id}`)}>View Item</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default CategoryProducts;
