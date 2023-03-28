import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-5 footer--pin">
        <div className="container">
          <div className="row text-white g-4">
            <div className="col-md-6 col-lg-3">
              <a
                className="text-uppercase text-decoration-none brand text-white"
                href="index.html"
              >
                WeWear
              </a>
              <p className="text-white text-muted mt-3">
              WeWear is a sustainable fashion brand that creates clothing for both men and women. The brand is committed to reducing the environmental impact of the fashion industry and uses eco-friendly materials such as organic cotton, Tencel, and recycled polyester. 
              </p>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light">Links</h5>
              <ul className="list-unstyled">
                <li className="my-3">
                  <Link

                    className="text-white text-decoration-none text-muted"
                    to="/"
                  >

                    <i className="fas fa-chevron-right me-1" /> Home
                  </Link>
                </li>
                <li className="my-3">
                  <Link

                    className="text-white text-decoration-none text-muted"
                    to="/products"
                  >

                    <i className="fas fa-chevron-right me-1" /> Collection
                  </Link>
                </li>
                <li className="my-3">
                  <Link

                    className="text-white text-decoration-none text-muted"
                    to="/aboutus"
                  >

                    <i className="fas fa-chevron-right me-1" /> About us

                  </Link>
                </li>
                <li className="my-3">
                  <Link

                    className="text-white text-decoration-none text-muted"
                    to="/login"
                  >
                    <i className="fas fa-chevron-right me-1" /> Login
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light mb-3">Contact Us</h5>
              <div className=" justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <i className="fas fa-map-marked-alt" />
                </span>
                <span className="fw-light">
                  Aston Street, Birmingham, B4 smth, United Kingdom
                </span>
              </div>
              <div className=" justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <i className="fas fa-envelope" />
                </span>
                <span className="fw-light">info@WeWear.com</span>
              </div>
              <div className=" justify-content-start align-items-start my-2 text-muted">
                <span className="me-3">
                  <i className="fas fa-phone-alt" />
                </span>
                <span className="fw-light">+4477777777</span>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h5 className="fw-light mb-3">Follow Us</h5>
              <div>
                <ul className="list-unstyled ">
                  <li>
                    <a
                      href="/"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-white text-decoration-none text-muted fs-4 me-4"
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
