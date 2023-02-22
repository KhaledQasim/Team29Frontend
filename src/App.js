import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';
import Login from "./Login/index";
import { useEffect } from 'react';
import { useLocalState } from './util/useLocalStorage';
import Admin from './admin';
import PrivateRoute from './PrivateRoute';

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/admin" element={<PrivateRoute> <Admin /></PrivateRoute>}/>
          {/* <Route exact path="/admin" element={<Admin/>}/> */}
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/products" element={<Products/>}/>
          <Route exact path="/AddProduct" element={<AddProduct/>}/>
          <Route exact path="/EditProduct/:id" element={<EditProduct/>}/>
          <Route exact path="/ViewProduct/:id" element={<ViewProduct/>}/>
          <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
