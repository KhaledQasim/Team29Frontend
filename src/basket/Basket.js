import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Basket() {
  const [products, setProducts, totalUniqueProducts, emptyCart, cartTotal] = useState([
    {
      productId: 1,
      name: 'Blue Hoodie',
      price: 44.55,
      image: 'https://th.bing.com/th/id/OIP.nGA5T16IBKGE_rZwZMo20gHaKq?pid=ImgDet&rs=1',
      amount: 2,
    },
    {
      productId: 2,
      name: 'Black Hoodie',
      price: 35.99,
      image: 'https://cdn-images.farfetch-contents.com/15/40/52/36/15405236_29062858_1000.jpg',
      amount: 1,
    },
    {
      productId: 3,
      name: 'White Hoodie',
      price: 34.89,
      image: 'https://www.directsoccer.co.uk/upload/img/747x856/234b2-gt6637_app_photo_front_web.jpg',
      amount: 1,
    },
  ]);



  const moveToCheckout = useNavigate();

  const deleteProduct = (productId) => {
    const initializeProducts = products.filter((product) => product.productId !== productId);
    setProducts(initializeProducts);
  };

  const addAmount = (productId) => {
    const initializeProducts = [...products];
    const index = initializeProducts.findIndex((product) => product.productId === productId);
    initializeProducts[index].amount++;
    setProducts(initializeProducts);
  };

  const removeAmount = (productId) => {
    const initializeProducts = [...products];
    const index = initializeProducts.findIndex((product) => product.productId === productId);
    if (initializeProducts[index].amount > 1) {
      initializeProducts[index].amount--;
      setProducts(initializeProducts);
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.price * product.amount;
    });
    return totalPrice.toFixed(2);
  };

  return (
    <div className='container content-container'>
      <h1 className='text-center m-4'>Shopping Cart</h1>
      <div className='row'>
        {products.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <table className='table'>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Amount</th>
                <th>Total Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.productId}>
                  <td>
                    <div
                      style={{
                        display: 'flex',
                        alignProducts: 'center',
                        gap: '20px',
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{ width: '200px', height: '200px' }}
                      />
                      <span>{product.name}</span>
                    </div>
                  </td>
                  <td>{product.price.toFixed(2)}</td>
                  <td>
                    <button
                      className='btn btn-outline-secondary btn-sm mx-2'
                      onClick={() => removeAmount(product.productId)}
                    >
                      -
                    </button>
                    {product.amount}
                    <button
                      className='btn btn-outline-secondary btn-sm mx-2'
                      onClick={() => addAmount(product.productId)}
                    >
                      +
                    </button>
                  </td>
                  <td>{(product.price * product.amount).toFixed(2)}</td>
                  <td>
                    <button
                      className='btn btn-outline-danger btn-sm'
                      onClick={() => deleteProduct(product.productId)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        
        )} 
                    
                    <div className='col-md-12 text-center'>
                    <div className='col-md-12 text-center'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Order Summary</h5>
              <p className='card-text'>
                Total Items: {totalUniqueProducts} <br />
                Total Cost: ${cartTotal}
              </p>
              <button
                className='btn btn-primary'
                onClick={() => {
                  emptyCart();
                  moveToCheckout('/');
          }}
        >
         Checkout
              </button>
            </div>
          </div>
        </div>

        <div className='col-md-6 offset-md-6 mt-2'>
          <h3>Total: {getTotalPrice()}</h3>
        </div>
      </div>
    </div>
    </div>
    
   ) }
