import React from "react";

const Info = () => {
  const TShirtName = (
    <div className="tshirtName">
      <div>
        <h1 className="big">WeWear T-Shirt</h1>
        <span className="new">new</span>
      </div>
      <h3 className="small">Men's Long-Sleeved T-Shirt</h3>
    </div>
  );

  const description = (
    <div className="description">
      <h3 className="title">Description</h3>
      <p className="text">
        Include a description of this specific item - doesn't need to be long
      </p>
    </div>
  );

  const ColorContainer = (
    <div className="color-container">
      <h3 className="title">Color</h3>
      <div className="colors">
        <span className="color active" primary="#2175f5" color="blue"></span>
        <span className="color" primary="#f84848" color="red"></span>
        <span className="color" primary="#29b864" color="green"></span>
        <span className="color" primary="#ff5521" color="orange"></span>
        <span className="color" primary="#444" color="black"></span>
      </div>
    </div>
  );

  const SizeContainer = (
    <div className="size-container">
      <h3 className="title">size</h3>
      <div className="sizes">
        <span className="size">S</span>
        <span className="size">M</span>
        <span className="size active">L</span>
        <span className="size">XL</span>
        <span className="size">XXL</span>
      </div>
    </div>
  );

  const BuySection = (
    <div className="buy-price">
      <a href="/#" className="buy">
        <i className="fas fa-shopping-cart"></i>Add to cart
      </a>
      <div className="price">
        <i className="fas fa-pound-sign"></i>
        <h1>149.99</h1>
      </div>
    </div>
  );

  return (
    <div className="info">
      {TShirtName}
      {description}
      {ColorContainer}
      {SizeContainer}
      {BuySection}
    </div>
  );
};

export default Info;