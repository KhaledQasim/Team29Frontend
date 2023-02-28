/* eslint-disable no-useless-concat */
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import './Home.css';
import { Button } from 'react-bootstrap';
// import $ from 'jquery';



export default function Home() {

    const [,setProducts]=useState([]);



    useEffect(() => {
        loadProducts();
    },[]);

    const loadProducts=async()=>{
        const result=await axios.get("http://localhost:8080/products");
        setProducts(result.data);
    };

    // const deleteProduct=async (id)=>{
    //     await axios.delete(`http://localhost:8080/product/${id}`);
    //     loadProducts();
    // }
  return (
    <>
  
 
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
    <div className="container">
      <a
        className="navbar-brand d-flex justify-content-between align-items-centerorder-lg-0 "
        href="index.html"
      >
        <img src="images/we_WEAR-8.png" width="125px" alt="site icon" />
      </a>
      <div className="order-lg-2 nav-btns">
        <button type="button" className="btn position-relative">
          <i className="fa fa-shopping-cart" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
            1
          </span>
        </button>
        <button type="button" className="btn position-relative">
          <i className="fa fa-heart" />
          <span className="position-absolute top-0 start-100 translate-middle badge bg-primary">
            1
          </span>
        </button>
        <button type="button" className="btn position-relative">
          <i className="fa fa-search" />
        </button>
      </div>
      <button
        className="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse order-lg-1" id="navMenu">
        <ul className="navbar-nav mx-aut•••••••••••y-2">
            <a className="nav-link text-uppercase text-dark" href="/products">
              collection
            </a>
          </li>
          <li className="nav-item px-2 py-2">
            <a className="nav-link text-uppercase text-dark" href="#about">
              about us
            </a>
          </li>
          <li className="nav-item px-2 py-2 border-0">
            <Link className="nav-link text-uppercase text-dark" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item px-2 py-2 border-0">
            <Link className="nav-link text-uppercase text-dark" to="/register">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav> */}
  {/* end of navbar */}
  {/* header */}
  <header 
    id="header"
    className="vh-100 carousel slide content-container"
    data-bs-ride="carousel"
    style={{ paddingTop: 104 }}
   >
    <div className="container h-100 d-flex align-items-center carousel-inner">
      <div className="text-center carousel-item active">
        <h2 className="text-capitalize text-white">WeWear collection</h2>
        <h1 className="text-uppercase py-2 fw-bold text-white">new arrivals</h1>
        <a href="/" className="btn mt-3 text-uppercase">
          shop now
        </a>
      </div>
      <div className="text-center carousel-item">
        <h2 className="text-capitalize text-white">WeWear Collection</h2>
        <h1 className="text-uppercase py-2 fw-bold text-white">new season</h1>
        <a href="/" className="btn mt-3 text-uppercase">
          buy now
        </a>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#header"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" />
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#header"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" />
    </button>
  </header>
 
  {/* end of header */}
  {/* collection */}
  <section id="collection" className="py-5">
    <div className="container">
      <div className="title text-center">
        <h2 className="position-relative d-inline-block">New Collection</h2>
      </div>
      <div className="row g-0">
        <div className="d-flex flex-wrap justify-content-center mt-5 filter-button-group">
          <button
            type="button"
            className="btn m-2 text-dark active-filter-btn"
            data-filter="*"
          >
            All
          </button>
          <Button
            type="button"
            className="btn m-2 text-dark"
            data-filter=".best"
          >
            Best Sellers
          </Button>
          <button
            type="button"
            className="btn m-2 text-dark"
            data-filter=".feat"
          >
            Featured
          </button>
          <button
            type="button"
            className="btn m-2 text-dark"
            data-filter=".new"
          >
            New Arrival
          </button>
        </div>
        <div className="collection-list mt-4 row gx-0 gy-3">
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
            <div className="special-img collection-img position-relative">
              <img src={process.env.PUBLIC_URL + 'HTML/we-WEAR-10.png'} className="w-100" alt='products'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 new">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 best">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 col-xl-3 p-2 feat">
            <div className="special-img collection-img position-relative">
              <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
              <span className="position-absolute bg-primary text-white d-flex align-items-center justify-content-center">
                sale
              </span>
            </div>
            <div className="text-center">
              <div className="rating mt-3">
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
                <span className="text-primary">
                  <i className="fas fa-star" />
                </span>
              </div>
              <p className="text-capitalize my-1">WeWear Black Hoodie</p>
              <span className="fw-bold">£77.77</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of collection */}
  {/* special products */}
  <section id="special" className="py-5">
    <div className="container">
      <div className="title text-center py-5">
        <h2 className="position-relative d-inline-block">Special Selection</h2>
      </div>
      <div className="special-list row g-0">
        <div className="col-md-6 col-lg-4 col-xl-3 p-2">
          <div className="special-img position-relative overflow-hidden">
            <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
            <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
              {/* <i class = "fas fa-heart"></i>//*/}
            </span>
          </div>
          <div className="text-center">
            <p className="text-capitalize mt-3 mb-1">WeWear Black Hoodie</p>
            <span className="fw-bold d-block">£77.77</span>
            <a href="/" className="btn btn-primary mt-3">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 p-2">
          <div className="special-img position-relative overflow-hidden">
            <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
            <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
              {/* <i class = "fas fa-heart"></i>//*/}
            </span>
          </div>
          <div className="text-center">
            <p className="text-capitalize mt-3 mb-1">WeWear Black Hoodie</p>
            <span className="fw-bold d-block">£77.77</span>
            <a href="/" className="btn btn-primary mt-3">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 p-2">
          <div className="special-img position-relative overflow-hidden">
            <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
            <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
              {/* <i class = "fas fa-heart"></i>//*/}
            </span>
          </div>
          <div className="text-center">
            <p className="text-capitalize mt-3 mb-1">WeWear Black Hoodie</p>
            <span className="fw-bold d-block">£77.77</span>
            <a href="/" className="btn btn-primary mt-3">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 col-xl-3 p-2">
          <div className="special-img position-relative overflow-hidden">
            <img src="images/we_WEAR-13.png" className="w-100" alt='product'/>
            <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
              {/* <i class = "fas fa-heart"></i>//*/}
            </span>
          </div>
          <div className="text-center">
            <p className="text-capitalize mt-3 mb-1">WeWear Black Hoodie</p>
            <span className="fw-bold d-block">£77.77</span>
            <a href="/" className="btn btn-primary mt-3">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end of special products */}
  {/* blogs */}
  <section id="offers" className="py-5">
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center text-center justify-content-lg-start text-lg-start">
        <div className="offers-content">
          <span className="text-white">Discount Up To 40%</span>
          <h2 className="mt-2 mb-4 text-white">Student Offer!</h2>
          <a href="/" className="btn">
            Shop Now
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* end of blogs */}
  {/* newsletter */}
  <section id="newsletter" className="py-5">
    <div className="container">
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="title text-center pt-3 pb-5">
          <h2 className="position-relative d-inline-block ms-4">
            Stay Up To Date With WeWear
          </h2>
        </div>
        <p className="text-center text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus rem
          officia accusantium maiores quisquam dolorum?
        </p>
        <div className="input-group mb-3 mt-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Email ..."
          />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </section>
  {/* end of newsletter */}
  {/* footer */}
  
  {/* end of footer */}
  {/* jquery */}
  {/* isotope js */}
  {/* bootstrap js */}
  {/* custom js */}
</>

  )
}
