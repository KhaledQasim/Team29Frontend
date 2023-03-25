import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Home.css';




function AboutUsContact() {
  return (
 <div className="contact-container">
      {/* About Us Section */}
      <div className="about-us-container">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">About Us</h2>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us About us
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="contact-us-container">
        <div className="container">
          <div className="title text-center">
            <h2 className="position-relative d-inline-block">Contact Us</h2>
          </div>
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <form>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="first-name" className="form-label">First Name</label>
                    <input type="text" className="form-control" id="first-name" />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="last-name" className="form-label">Last Name</label>
                    <input type="text" className="form-control" id="last-name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5"></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContact;





