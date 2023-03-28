import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const SingleProductnew = () => {
  const [mainImage, setMainImage] = useState(
    process.env.PUBLIC_URL + 'HTML/we-WEAR-10.png'
  );

  const changeMainImage = (image) => {
    setMainImage(image);
  };

  const thumbnails = [
    process.env.PUBLIC_URL + 'HTML/we-WEAR-10.png',
    process.env.PUBLIC_URL + 'HTML/we-WEAR-11.png',
    process.env.PUBLIC_URL + 'HTML/we-WEAR-12.png',
  ];

  return (
    <div className="content-container-product">
      <section id="single-product" className="py-5">
        <div className="container">
          <div className="row align-items-start">
             <div className="col-md-6">
              <div className="product-img-container">
                <img src={mainImage} className="img-fluid" alt="product" />

                <div className="thumbnail-container mt-3 d-flex justify-content-center">
                  {thumbnails.map((thumbnail, index) => (
                    <img
                      key={index}
                      src={thumbnail}
                      className="img-thumbnail mr-2"
                      alt="thumbnail"
                      onClick={() => changeMainImage(thumbnail)}
                    />
                  ))}
                </div>


              </div>
            </div>
            <div className="col-md-6">
              <div className="product-details-container">
                <h2 className="product-title mb-4">WeWear Black Hoodie</h2>
                <div className="rating mb-4"></div>
                <p className="product-price text-primary fw-bold mb-4">
                  £77.77
                </p>
                <p className="product-description mb-4">
                  This WeWear Black Hoodie is made from high-quality materials
                  and designed for comfort and style. Perfect for
                </p>
                <div className="form-group mb-4">
                  <label htmlFor="size" className="form-label d-block">
                    Size:
                  </label>
                  <select
                    className="form-control product-size"
                    id="size"
                    name="size"
                  >
                    <option selected>Choose...</option>
                    <option value="S">Small</option>
                    <option value="M">Medium</option>
                    <option value="L">Large</option>
                    <option value="XL">Extra Large</option>
                  </select>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="quantity" className="form-label d-block">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    className="form-control product-quantity"
                    id="quantity"
                    name="quantity"
                    min="1"
                    max="99"
                    defaultValue="1"
                  />
                </div>
                <button className="btn btn-primary add-to-cart-btn mb-3">
                  Add to Cart
                </button>
                <br />
                <Link
                  to="/"
                  className="text-decoration-none continue-shopping-link"
                >
                  Continue Shopping
                </Link>
                <div className="product-details-section">
                  <h3 className="mb-4">Product Details</h3>
                  <ul className="list-unstyled">
                    <li>
                      <strong>Material:</strong>70% Cotton, 30% Polyester
                    </li>
                    <li>
                      <strong>Fit:</strong>Regular fit, true to size
                    </li>
                    <li>
                      <strong>Care Instructions:</strong>Machine wash cold, tumble dry low
                    </li>
                    <li>
                      <strong>Features:</strong>Hood with drawstrings, kangaroo pocket, ribbed cuffs and hem
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleProductnew;

