import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, } from 'react-router-dom';
export default function Home() {

    const [products,setProducts]=useState([]);

   

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
    <div className='container content-container'>
        <div className='py-4'>
            <table className="table border shadow">
            <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Image</th>
                    <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=>(
                        <tr  key={index+1}>
                            {/*use product.id for actual product id that is stored in the DataBase*/}
                            <th scope="row">{index+1}</th>   
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            {/* process.env.PUBLIC_URL +   */}
                            <td><img style={{resizeMode: 'contain',height: 100,width: 125,}} src={product.image} alt="product"/></td>
                            <td>
                                <Link className='btn btn-primary mx-2' to={`/ViewProduct/${product.id}`}>View</Link>
                                <Link className='btn btn-outline-primary mx-2' to={`/EditProduct/${product.id}`}>Edit</Link>
                                {/* <button className="btn btn-danger mx-2" onClick={()=>deleteProduct(product.id)}>Delete</button> */}
                            </td>
                        </tr>
                        ))
                    }
                </tbody>
            </table>            
        </div>
    </div>
  )
}
