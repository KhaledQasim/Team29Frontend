import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Product.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import {
  getProductCount,
  getTotalPrice,
  addProductToCart,
} from "../basket/cartFunctions";
import ReactQuill from "react-quill";
import { Button } from "react-bootstrap";
export const BASE_URL = "/carts";
const SingleProductnew = () => {
  useEffect(() => {
    loadProductById();
    const cartId = localStorage.getItem("cartId");
    if (cartId) {
      const getCartData = async () => {
        try {
          const response = await axios.get(`${BASE_URL}/${cartId}`);
          setCartData(response.data.products);
        } catch (error) {
          console.error(error);
        }
      };

      getCartData();
    }
  }, []);

  const [avaliable, setAvaliable] = useState(false);

  // useEffect(() => {
  //   setMainImage(product.image);
  // }, [product]);

  setTimeout(() => {
    setMainImage(product.image);
  }, 500);
  const loadProductById = async () => {
    await axios
      .get(`/product/${id}`)
      .then((response) => {
        setProduct(response.data);
        setImageArray(response.data.images.split(","));
      })
      .finally(() => {
        setTimeout(() => {
          setMainImage(product.image);
        }, 500);
      });
  };
  const { id } = useParams();
  const [imageArray, setImageArray] = useState([]);
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState([]);
  const [mainImage, setMainImage] = useState(product.image);

  const changeMainImage = (image) => {
    setMainImage(image);
  };

  const thumbnails = imageArray;

  const handleUpdateCart = async (updatedCart) => {
    const cartId = localStorage.getItem("cartId");
    if (!cartId) {
      throw new Error("Cart ID is undefined");
    }
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    console.log(cartData);
    const updatedCartItemIndex = cartData.findIndex(
      (item) => item.id === updatedCart.id && item.size === updatedCart.size
    );
    if (updatedCartItemIndex < 0) {
      throw new Error("Could not find item in cart");
    }

    const updatedCartData = [
      ...cartData.slice(0, updatedCartItemIndex),
      { ...cartData[updatedCartItemIndex], quantity: updatedCart.quantity },
      ...cartData.slice(updatedCartItemIndex + 1),
    ];

    localStorage.setItem("cartData", JSON.stringify(updatedCartData));

    const cartQuantity = getProductCount(updatedCartData);
    const totalPrice = getTotalPrice(updatedCartData);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      params: {
        quantity: cartQuantity,
        totalPrice: totalPrice,
      },
    };

    const requestBody = {
      product: updatedCartData,
    };

    try {
      await axios.put(`${BASE_URL}/${cartId}`, requestBody, config);
      console.log("Cart Updated:", requestBody);
      return true; // indicate that the request was successful
    } catch (error) {
      throw new Error("Failed to update cart"); // throw an error if the request failed
    }
  };

  const handleAddToCart = async (productId, size, quantity, price) => {
    if (product.quantity === 0) {
      // const addToCartButton = document.getElementById(
      //   `add-to-cart-${productId}-${size}`
      // );
      // addToCartButton.disabled = true;
      // addToCartButton.textContent = "Out of Stock";
      window.alert("Out of Stock");
    } else {
      const existingCartData =
        JSON.parse(localStorage.getItem("cartData")) || [];

      if (existingCartData.quantity === 0) {
     
        Object.keys(localStorage)
          .filter((x) => x.startsWith("cart"))
          .forEach((x) => localStorage.removeItem(x));
      }
      const existingProductIndex = existingCartData.findIndex(
        (item) => item.productId === productId && item.size === size
      );
      if (existingProductIndex > -1) {
        if (
          existingCartData[existingProductIndex].quantity >= product.quantity
        ) {
          alert(`No more of this product can be added to cart!`);
          return;
        }
        existingCartData[existingProductIndex].quantity += parseInt(1);
      } else {
        existingCartData.push({
          productId,
          size,
          quantity: 1,
          price,
        });
      }
      setCartData(existingCartData);
      localStorage.setItem("cartData", JSON.stringify(existingCartData));
      const cartId = localStorage.getItem("cartId");

      // if (product.quantity < 5) {
      //   alert(`There are only ${product.quantity} items remaining in stock.`);
      // }
      await addProductToCart(productId, quantity, size, price, cartId);
      await handleUpdateCart({ product: existingCartData });
    }
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <>
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
                        key={index + 1}
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
                  <h2 className="product-title mb-4">{product.name}</h2>
                  <div className="rating mb-4"></div>
                  <p className="product-price text-primary fw-bold mb-4">
                    {"£" + product.price / 100}
                  </p>
                  <p className="product-description mb-4">
                    <ReactQuill
                      value={product.description}
                      readOnly={true}
                      theme={"bubble"}
                    />
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
                      {"Stock: " + product.quantity}
                    </label>
                  </div>
                  {/* <button className="btn btn-primary add-to-cart-btn mb-3">
                    Add to Cart
                  </button> */}
                  <button
                    className="btn btn-primary add-to-cart-btn mb-3"
                    onClick={() =>
                      handleAddToCart(
                        product.id,
                        product.size,
                        product.quantity,
                        product.price / 100
                      )
                    }
                  >
                    {" "}
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
                        <strong>Care Instructions:</strong>Machine wash cold,
                        tumble dry low
                      </li>
                      <li>
                        <strong>Features:</strong>Hood with drawstrings,
                        kangaroo pocket, ribbed cuffs and hem
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProductnew;
