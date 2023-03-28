import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { calculateTotalPrice, getCart } from "../basket/cartFunctions";

export const Checkout = () => {
  // Get cart data from basket.js
  const cartData = getCart();

  // State for billing information
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // Calculate the total price and VAT using cartFunction.js
  const totalPrice = calculateTotalPrice(cartData);
  const VAT = totalPrice * 0.2;

  return (
    <div className="checkout">
      <h1>Order Summary</h1>
      <ul>
        {cartData.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <div className="total-price">
        <p>Total Price: ${totalPrice}</p>
        <p>VAT (20%): ${VAT.toFixed(2)}</p>
        <p>Total Due: ${(totalPrice + VAT).toFixed(2)}</p>
      </div>
      <h2>Billing Information</h2>
      <form>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        <label htmlFor="city">City:</label>
        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
        <label htmlFor="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
      </form>
      <Link to="checkout/confirmation">
        <button>Place Order</button>
      </Link>
    </div>
  );
};

export default Checkout;
