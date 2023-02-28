
import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddProduct() {
  let navigate = useNavigate();
  const [product,setProduct]=useState({
    name:"",
    image:"",
    price:""
  });

  const{name,image,price} = product;

  const onInputChange=(event)=>{
    setProduct({...product, [event.target.name]:event.target.value})
  };

  const onSubmit=async(event)=>{
    event.preventDefault();
    await axios.post("http://localhost:8080/product",product);
    navigate("/");  
  }

  return (
    <div className='container content-container'>
      <div className='row'>
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className='text-center m-4'>Add Product</h2>
          <form onSubmit={(event)=>onSubmit(event)}>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>
              Product Name
            </label>
            <input
            type={"text"}
            className="form-control"
            placeholder='Enter Product Name'
            name='name'
            required
            value={name}
            onChange={(event)=>onInputChange(event)}
            />
            <label htmlFor='price' className='form-label'>
              Product Price
            </label>
            <input
              type={"number"}
              className="form-control"
              placeholder='Enter Product Price'
              name='price'
              required
              value={price}
              onChange={(event)=>onInputChange(event)}
              />
            <label htmlFor='image' className='form-label'>
              Product Image
            </label>
            <input
              type={"text"}
              className="form-control"
              placeholder='Enter Product Image'
              name='image'
              required
              value={image}
              onChange={(event)=>onInputChange(event)}
              />
          </div>
          <button type='submit' className="btn btn-outline-primary">Submit</button>
          <Link className="btn btn-outline-danger mx-2" to={"/"}>Cancel</Link>
          </form>
        </div>
      </div>
    </div>
  )
}
