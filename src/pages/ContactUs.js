import React, { useEffect, useRef, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Home.css';
import emailjs from "@emailjs/browser";
import styled from 'styled-components';



function AboutUsContact() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [ButtonDisabled, setButtonDisabled] = useState(false);
  const handleSubmit = (e) => {
    setSuccess(null);
    setButtonDisabled(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9rvv2cv",
        "template_f22zw9g",
        ref.current,
        "c3ANeXo_hHLZ3f96S"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setSuccess("Your message has been sent. We'll get back to you soon :)");
          setSuccess(1);
          setTimeout(() => {setButtonDisabled(false)}, 1000);
          
        },
        (error) => {
          console.log(error.text);
          // setSuccess("An error occurred. Please send me an email manually instead at khaled.qasim183@gmail.com");
          setSuccess(0);
          setTimeout(() => {setButtonDisabled(false)}, 1000);
        }
      );
  };
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
              <form ref={ref} onSubmit={handleSubmit}>
                <div className="row mb-3">
                
                  <div className="col-md-12">
                    <label htmlFor="name"  className="form-label">Name</label>
                    <input type="text" name="name" required className="form-control" id="name" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" required  name="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea required className="form-control" name="message" id="message" rows="5"></textarea>
                </div>
                <button disabled={ButtonDisabled} type="submit" className="btn btn-primary btn-lg w-100">Submit</button>
                {(success === 1)
              ?
              <span style={{color: "#6aff14", marginTop: "10px"}}>Your message has been sent. I will get back to you soon!</span>
              : 
              (success === 0) ? <span  style={{color: "#ff1414", marginTop: "10px"}} >An error occurred.</span> 
              : 
              null
              }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsContact;





