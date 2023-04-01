import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { emptyCart, getCartById } from "../basket/cartFunctions";

const Confirmation = (cartData) => {
  useEffect(() => {
    localStorage.removeItem("cartData");
    localStorage.removeItem("cartId");
    // console.log(localStorage.getItem("cartData"))

  });

  const [id, setId] = useState({});
  const [cart, setCart] = useState(cartData);
  const [cartChanged, setCartChanged] = useState(false);

  const handleEmptyCart = async () => {
    const cartId = localStorage.getItem("cartId");
    try {
      await emptyCart(cartId);
      setCart(await getCartById(cartId));
      localStorage.removeItem("cartData");
      setCartChanged(true); // set cartChanged to true
    } catch (error) {
      console.error("Error emptying cart:", error);
    }
  };
  return (
    <div className="confirmation content-container">
      <h1>Thank you for your order!</h1>
      <p>Your order has been successfully placed.</p>

      <p>Your order status is: "Processing"</p>
      <p>
        You will receive an email confirmation with the details of your order
        shortly.
      </p>
      <Link to="/">
        <Button>Back to Home</Button>
      </Link>
    </div>
  );
};

export default Confirmation;
