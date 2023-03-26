import React, { useEffect, useState } from 'react';
import { Card, Button, CardGroup, Form, Col } from 'react-bootstrap';
import { addProductToCart, getProductById, getProductCount, getTotalPrice} from '../basket/cartFunctions';
import axios from 'axios';
import Basket from '../basket/Basket';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('S');
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [cartData, setCartData] = useState([]);
  const BASE_URL = 'http://localhost:3000/carts';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products');
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchProducts();
  
    const cartId = localStorage.getItem('cartId');
    if (cartId) {
      const getCartData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${cartId}`);
          setCartData(response.data.products);
        } catch (error) {
          console.error(error);
        }
      };
  
      getCartData();
    }
  }, []);
  
  
  const handleUpdateCart = async (updatedCart) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      throw new Error('Cart ID is undefined');
    }
  
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    const updatedCartItemIndex = cartData.findIndex(item => item.id === updatedCart.id && item.size === updatedCart.size);
  
    if (updatedCartItemIndex < 0) {
      throw new Error('Could not find item in cart');
    }
  
    const updatedCartData = [
      ...cartData.slice(0, updatedCartItemIndex),
      { ...cartData[updatedCartItemIndex], quantity: updatedCart.quantity },
      ...cartData.slice(updatedCartItemIndex + 1),
    ];
  
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
  
    const cartQuantity = getProductCount(updatedCartData);
    const totalPrice = getTotalPrice(updatedCartData);
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
      params: {
        quantity: cartQuantity,
        totalPrice: totalPrice,
      },
    };
  
    const requestBody = {
      products: updatedCartData,
    };
  
    try {
      await axios.put(`${BASE_URL}/${cartId}`, requestBody, config);
      console.log('Cart Updated:', requestBody);
      return true; // indicate that the request was successful
    } catch (error) {
      throw new Error('Failed to update cart'); // throw an error if the request failed
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
    const product = products.find((p) => p.id === productId && p.size === size);
    const fetchedProduct = await getProductById(productId);
    if (existingProductIndex > -1) {
      cartData[existingProductIndex].quantity += parseInt(quantity);
    } else {
      cartData.push({ productId, size, quantity: parseInt(quantity), price });
    }
    setCartData(cartData);
    localStorage.setItem('cartData', JSON.stringify(cartData));
    await addProductToCart(productId, quantity, size, price, cartId);
    await handleUpdateCart(cartId, { products: cartData });
    if (product.quantity < 5) {
      alert(`There are only ${product.quantity} items remaining in stock.`);
    }
    if (product.quantity === 0) {
      const addToCartButton = document.getElementById(`add-to-cart-${productId}-${size}`);
      addToCartButton.disabled = true;
      addToCartButton.textContent = 'Out of Stock';
    }
  };
  
  
  
return (
  <div>
    <div className="row">
      {products.map((product) => (
        <Col key={product.id} sm={12} md={6} lg={4}>
          <Card>
            <Card.Body>
            <Card.Img variant="card-top-sm" src={product.image} style={{ width: '300px', height: '300px' }} />
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
                    <option value="XL">XL</option>

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
        </Col>
      ))}
    </div>
  </div>
);
}
export default ProductList;