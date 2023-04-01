import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Home.css";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import { jwtAtom } from "../App";

const Checkoutnew = () => {

  
  const [jwt, setJwt] = useAtom(jwtAtom);
  function  getUserEmail () {
    if (jwt) {
      const decodedJwt = jwt_decode(jwt);
      return JSON.stringify(decodedJwt.sub).slice(1,-1);
    }
    
    return[];
  };
  const ref = useRef();
  const [disabled , setDisabled] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
   
    // console.log(ref.current.firstName.value);
    setDisabled(true);
    const result = await axios.get(`/singleUser/getByUsername/${getUserEmail()}`,{ headers: {"Authorization" : `Bearer ${jwt}`} })
 
    const data = {
      firstName: ref.current.firstName.value,
      lastName: ref.current.lastName.value,
      email: result.data.email,
      address: ref.current.address.value,
      city: ref.current.city.value,
      postCode: ref.current.postCode.value,
      products: localStorage.getItem("cartData"),
      orderStatus: "Processing",
      paymentType: "Card",
      userId: result.data.id,
      totalPrice: getTotalPrice()
    }
    
    await axios.post("loggedUser/OrderNew", data)
      .then((res) => {
    
        
        // setTimeout(() => { navigate("/checkout/confirmation");}, 200);
        
        const data = JSON.parse(localStorage.getItem("cartData"));
       
        const d = {id : data.map((item) => item.productId), quantity:  data.map((item) => item.quantity) }
         axios
          .put("api/product/reduce", d)
          .then((res) => {
            navigate("/checkout/confirmation");
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err)
      })
      setTimeout(() => { setDisabled(false);}, 2000);
    // console.log(JSON.parse('[{"productId":9,"size":"M","quantity":4,"price":50},{"productId":25,"size":"M","quantity":1,"price":50}]'));
    // console.log(JSON.stringify('[{"productId":9,"size":"M","quantity":4,"price":50},{"productId":25,"size":"M","quantity":1,"price":50}]'))
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    const data = JSON.parse(localStorage.getItem("cartData"));
    for (let i = 0; i < data.length; i++) {
      let price = data[i].price;
      let quantity = data[i].quantity;
      totalPrice += price * quantity;
     
    }
    return totalPrice;
  };

  return (
    <div className="checkout-container content-container">
      <div className="container">
        <form ref={ref} onSubmit={handleSubmit}>
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">Checkout</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h3>Billing Information</h3>

              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="first-name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    name="firstName"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="last-name" name="lastName" required/>
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                  
                </label>
                {/* required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Please enter a valid email address." */}
                <input type="email" className="form-control" id="email" name="email" value={getUserEmail()} readOnly 
                  
                />
                
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label" >
                  Address
                </label>
                <input type="text" className="form-control" id="address" name="address" required/>
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="city" className="form-label" >
                    City
                  </label>
                  <input type="text" className="form-control" id="city" name="city" required/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="post-code" className="form-label">
                    Post Code
                  </label>
                  <input type="text" className="form-control" id="post-code" name="postCode" required/>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3>Payment Information</h3>

              <div className="mb-3">
                <label htmlFor="card-number" className="form-label">
                  Card Number
                </label>
                <input type="text" className="form-control" id="card-number" max={19} name="cardNumber" required title="Please enter a valid card number above 16 and under 19 digits" pattern="[0-9]{16,19}" />
              </div>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="expiry-date" className="form-label" >
                    Expiry Date
                  </label>
                  <input
                    name="expiryDate"
                    required
                    pattern="^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$"
                    title="Please enter a valid date in this format MM/YY"
                    type="text"
                    className="form-control"
                    id="expiry-date"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="cvc" className="form-label">
                    CVC
                  </label>
                  <input required pattern="[0-9]{3,3}" type="text" className="form-control" id="cvc" name="cvc" title="Please enter your 3 digit CVC number"/>
                </div>
              </div>

             
              {/* <span>{localStorage.getItem("cartData")}</span> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center mt-4">
              <button type="submit" className="btn btn-primary btn-lg" disabled={disabled}>
                Complete Purchase
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkoutnew;
