import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const CategoryProducts = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sizeFilter, setSizeFilter] = useState('');
  const [minPriceFilter, setMinPriceFilter] = useState('');
  const [maxPriceFilter, setMaxPriceFilter] = useState('');

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

  const handleSizeFilter = (event) => {
    setSizeFilter(event.target.value);
  };

  const handleMinPriceFilter = (event) => {
    setMinPriceFilter(event.target.value);
  };

  const handleMaxPriceFilter = (event) => {
    setMaxPriceFilter(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (sizeFilter === '' || product.size === sizeFilter) &&
    (minPriceFilter === '' || product.price/100 >= minPriceFilter) &&
    (maxPriceFilter === '' || product.price/100 <= maxPriceFilter)
  );

  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
      <Form>
        <Form.Control
          type="text"
          placeholder="Search products by name"
          value={searchQuery}
          onChange={handleSearch}
          style={{ width: "500px" }}

        />
        <Form.Control
          as="select"
          value={sizeFilter}
          onChange={handleSizeFilter}
          style={{ width: "500px" }}

        >
          <option value="">All sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>

        </Form.Control>
        <Form.Group>
  <Form.Label className="text-start" style={{paddingRight: 1050}}>Price range:</Form.Label>
  <Form.Control
    type="number"
    placeholder="Min Price"
    value={minPriceFilter}
    onChange={handleMinPriceFilter}
    style={{ width: "500px" }}
    min={0}
  />
  <Form.Control
    type="number"
    placeholder="Max Price"
    value={maxPriceFilter}
    onChange={handleMaxPriceFilter}
    style={{ width: "500px" }}
    min={0}
  />
</Form.Group>

      </Form>
      <Row xs={2} md={5} className="g-0">
        {filteredProducts.map((product) => (
          <Card style={{ width: "18rem", marginRight: "1rem",  marginBottom: "1rem" }}>
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
