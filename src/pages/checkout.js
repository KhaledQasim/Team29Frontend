import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './Home.css';

function Checkoutnew() {
  return (
    <div className="checkout-container">
      <div className="container">
        <div className="title text-center">
          <h2 className="position-relative d-inline-block">Checkout</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h3>Billing Information</h3>
            <form>
              <div className="row mb-3">
                <div className="col-md-6">
                  <label htmlFor="first-name" className="form-label">
                    First Name
                  </label>
                  <input type="text" className="form-control" id="first-name" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="last-name" className="form-label">
                    Last Name
                  </label>
                  <input type="text" className="form-control" id="last-name" />

            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="city" />
            </div>
            <div className="col-md-6">
              <label htmlFor="post-code" className="form-label">
                Post Code
              </label>
              <input type="text" className="form-control" id="post-code" />
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <h3>Payment Information</h3>
        <form>
          <div className="mb-3">
            <label htmlFor="card-number" className ="form-label">
              Card Number
            </label>
            <input type="text" className="form-control" id="card-number" />
          </div>
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="expiry-date" className="form-label">
                Expiry Date
              </label>
              <input type="text" className="form-control" id="expiry-date" placeholder="MM/YY" />
            </div>
            <div className="col-md-6">
              <label htmlFor="cvc" className="form-label">
                CVC
              </label>
              <input type="text" className="form-control" id="cvc" />
            </div>
          </div>
        </form>
        <h1>Put your images here or whaterver</h1>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12 text-center mt-4">
        <button type="submit" className="btn btn-primary btn-lg">
          Complete Purchase
        </button>
      </div>
    </div>
  </div>
</div>
  );
}

export default Checkoutnew;

