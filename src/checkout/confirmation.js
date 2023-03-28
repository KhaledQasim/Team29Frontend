import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  // Generate random order ID and set order status to "Processing"
  const [order] = useState({
    id: Math.floor(Math.random() * 100000000),
    status: 'Processing',
  });

  // Set order status to "Complete" after 5 seconds
  setTimeout(() => {
    order.status = 'Complete';
  }, 5000);

  return (
    <div className="confirmation">
      <h1>Thank you for your order!</h1>
      <p>Your order has been successfully placed.</p>
      <p>Your order ID is: {order.id}</p>
      <p>Your order status is: {order.status}</p>
      <p>You will receive an email confirmation with the details of your order shortly.</p>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
};

export default Confirmation;
