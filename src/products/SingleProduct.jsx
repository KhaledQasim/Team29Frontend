import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Row } from "react-bootstrap";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [imageArray, setImageArray] = useState([]);
  const navigate = useNavigate();
  const [Product, SetProduct] = useState([]);
  const loadProductById = async () => {
    await axios.get(`/product/${id}`).then((data) => {
      SetProduct(data.data);
      setImageArray(data.data.images.split(","));
    });
  };
  useEffect(() => {
    loadProductById();
  }, []);

  return (
    <div className="content-container" style={{ marginLeft: "1rem" }}>
      <img alt="product" src={Product.image} />
      <h4>{"Name: " + Product.name}</h4>
      <h4>{"£" + Product.price / 100}</h4>
      <h4>{"Stock: " + Product.quantity}</h4>
      <h4>{"Size: " + Product.size}</h4>
      <ReactQuill
        value={Product.description}
        readOnly={true}
        theme={"bubble"}
      />
      {
        imageArray.map((image,index) => <img key={index+1} src={image} alt="product" />)
      }
      
    </div>
  );
};

export default SingleProduct;
