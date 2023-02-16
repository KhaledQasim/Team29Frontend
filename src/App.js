
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';
import { useEffect, useState } from 'react';

function App() {
  
  const [ jwt, setJwt] = useState("");
  useEffect(() => {
    console.log("hello")
    const reqBody ={
      email: "admin@gmail.com",
      password: "1234"
    };  
    fetch("auth/login",{
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
        .then((response) => Promise.all([response.json()]))
        .then(([body]) => {
          setJwt(JSON.stringify(body).slice(10,-2));
        });
  },  []);        
 
  return (
    
    <div className="App">
     
      <Router>
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/AddProduct" element={<AddProduct/>}/>
          <Route exact path="/EditProduct/:id" element={<EditProduct/>}/>
          <Route exact path="/ViewProduct/:id" element={<ViewProduct/>}/>
        </Routes>
        
      </Router>
     
    </div>
    
  );
}

export default App;
