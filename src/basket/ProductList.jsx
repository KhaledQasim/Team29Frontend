import React, { useEffect, useState } from 'react';
import { Card, Button, CardGroup, Form } from 'react-bootstrap';
import { addProductToCart, getProductById, } from './cartFunctions';
import axios from 'axios';
import Basket from './Basket';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('S');
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [cartData, setCartData] = useState([]);
  const BASE_URL = 'http://localhost:3000/carts';

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('/products');
      const data = response.data;
      setProducts(data);
    };
    fetchData();
    const storedCartData = JSON.parse(localStorage.getItem('cart')) || [];
    setCartData(storedCartData);
  }, []);
  
  const handleUpdateCart = async (cartId, cartData) => {
    try {
      await axios.put(`${BASE_URL}/${cartId}`, cartData);
    } catch (error) {
    }
  };
  

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleSizeChange = (event, productId) => {
    const newSize = event.target.value;
    const product = products.find((p) => p.id === productId);
    const newAvailableQuantity = product.quantity[newSize];
    if (newAvailableQuantity === 0) {
      setSize('S');
      setAvailableQuantity(0);
    } else {
      setSize(newSize);
      setAvailableQuantity(newAvailableQuantity);
    }
  };
  const handleAddToCart = async (productId, size, quantity, price) => {
    const cartId = localStorage.getItem('cartId');
    const existingProductIndex = cartData.findIndex((item) => item.productId === productId && item.size === size);
    const product = products.find((p) => p.id === productId);
    const fetchedProduct = await getProductById(productId);
  
    if (existingProductIndex > -1) {
      cartData[existingProductIndex].quantity += parseInt(quantity);
    } else {
      cartData.push({ productId, size, quantity: parseInt(quantity), price });
    }
  
    setCartData(cartData);
    localStorage.setItem('cartData', JSON.stringify(cartData));
  
    try {
      await addProductToCart(productId, quantity, size, price);
      if (product.quantity < 5) {
        alert(`There are only ${product.quantity} items remaining in stock.`);
      }
      if (product.quantity === 0) {
        const addToCartButton = document.getElementById(`add-to-cart-${productId}-${size}`);
        addToCartButton.disabled = true;
        addToCartButton.textContent = 'Out of Stock';
      }
    } catch (error) {
      window.alert('Failed to add product to cart');
    }
  };
  
  return (
    <div>
      {products.map((product) => (
        <CardGroup key={product.id}>
          <Card>
            <Card.Body>
              <Card.Img variant="card-top-sm" src={product.image} />
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>${product.price}</Card.Text>
              <Form>
                <Form.Group controlId="sizeSelect">
                  <Form.Label>Size</Form.Label>
                  <Form.Control as="select" onChange={(event) => handleSizeChange(event, product.id)}>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="quantityInput">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type="number" min="1" max={availableQuantity} value={quantity} onChange={handleQuantityChange} />
                </Form.Group>
              </Form>
              <Button
             id={`add-to-cart-${product.id}-${size}`}
             variant="primary"
             disabled={availableQuantity === 0}
             onClick={() => handleAddToCart(product.id, size, quantity, product.price)}
>
  Add to Cart
</Button>
            </Card.Body>
          </Card>
        </CardGroup>
      ))}
    </div>
    
  );
}
export default ProductList;