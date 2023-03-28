import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Row, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useNavigate, useParams, Link } from "react-router-dom";
import { getProductCount, getTotalPrice, updateCart, addProductToCart} from "../basket/cartFunctions";
import Basket from '../basket/Basket';

export const BASE_URL = '/carts';

const SingleProduct = () => {
  const { id } = useParams();
  const [imageArray, setImageArray] = useState([]);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState([]);
  
  const loadProductById = async () => {
    try {
      const response = await axios.get(`/product/${id}`);
      setProduct(response.data);
      setImageArray(response.data.images.split(","));
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
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
    
    loadProductById();
  }, []);

  const handleUpdateCart = async (updatedCart) => {
    const cartId = localStorage.getItem('cartId');
    if (!cartId) {
      throw new Error('Cart ID is undefined');
    }
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    console.log(cartData);
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
      product: updatedCartData,
    };
  
    try {
      await axios.put(`${BASE_URL}/${cartId}`, requestBody, config);
      console.log('Cart Updated:', requestBody);
      return true; // indicate that the request was successful
    } catch (error) {
      throw new Error('Failed to update cart'); // throw an error if the request failed
    }
  };
  
  
  const handleAddToCart = async (productId, size, quantity, price) => {
    const existingCartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const existingProductIndex = existingCartData.findIndex((item) => item.productId === productId && item.size === size);
    if (existingProductIndex > -1) {
      existingCartData[existingProductIndex].quantity += parseInt(quantity);
    } else {
      existingCartData.push({ productId, size, quantity: parseInt(quantity), price });
    }
    setCartData(existingCartData);
    localStorage.setItem('cartData', JSON.stringify(existingCartData));
    const cartId = localStorage.getItem('cartId');
    await addProductToCart(productId, quantity, size, price, cartId);
    await handleUpdateCart({ product: existingCartData });
    if (product.quantity < 5) {
      alert(`There are only ${product.quantity} items remaining in stock.`);
    }
    if (product.quantity === 0) {
      const addToCartButton = document.getElementById(`add-to-cart-${productId}-${size}`);
      addToCartButton.disabled = true;
      addToCartButton.textContent = 'Out of Stock';
    }
  };
  
  
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };


  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
    <Link to={`/productsCategory/${product.category}`}><Button variant="primary">Go Back</Button></Link>

    
      <img alt="product" src={product.image} />
      <h4>{"Name: " + product.name}</h4>
      <h4>{"£" + product.price/100}</h4>
      <h4>{"Stock: " + product.quantity}</h4>
      <h4>{"Size: " + product.size}</h4>
      {/* <Form.Group controlId="quantityInput">
      <Form.Label>Quantity</Form.Label>
        <Form.Control type="number" min="1" max={product.quantity} value={1}
        />
      </Form.Group> */}
      <Button
      variant="primary"
      onClick={() => handleAddToCart(product.id, product.size, quantity, product.price/100)}> Add to Cart</Button>
      <ReactQuill
        value={product.description}
        readOnly={true}
        theme={"bubble"}
      />
      {
        imageArray.map((image,index) => <img key={index+1} src={image} alt="product" />)
      }
      
    </div>
  );
};

export default SingleProduct;
