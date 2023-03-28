import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar';
import Footer from './footer';
import HomeNew from './pages/HomeNew';
import HomeOld from './Home';
import { Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';
import Login from "./login/index";
import UserProfile from './UserProfile';
import Products from './products/Products';
import TShirts from './products/T-shirts';
import Jumpers from './products/Jumpers';
import Jeans from './products/Jeans';
import Shorts from './products/Shorts';
import Jackets from './products/Jackets';
import PrivateRoute from './PrivateRoute';
import Register from './register';
// import { atom } from 'jotai';
import Logout from './logout';
import Basket from './basket/Basket';
import AboutUsContact from "./pages/ContactUs";
import Checkout from "./pages/checkout";
import SingleProduct from "./pages/Single-Product";


// export const jwtAtom = atom(Cookies.get("jwt"));
// export const Atomlogged = atom("");



function App() {
  // const [roles,setRoles] = useState([]);
  // const user = useUser();

  // useEffect(() =>{
  //   console.log("JWT has changed");
  //   setRoles(getRolesFromJWT());
  // },[user.jwt]);

  // function getRolesFromJWT(){
  //   if(user.jwt){
  //     const decodedJwt = jwt_decode(user.jwt);
  //     return JSON.stringify(decodedJwt.authorities);
  //   }
  // }


  return (

      <div className="App">
       <React.Fragment/>
        <Navbar/>
          <Routes>

              {/* <Route exact path="/" element={<HomeNew/>}/> */}
              <Route index element={<HomeNew/>}/>
              <Route exact path="/aboutus" element={<AboutUsContact/>}/>
              <Route exact path="/checkout" element={<Checkout/>}/>
              <Route exact path="/product" element={<SingleProduct/>}/>
              <Route exact path="/login" element={<Login/>}/>
              <Route exact path="/register" element={<Register/>}/>
              <Route exact path="/logout" element={<Logout />}/>
              <Route exact path="/homeOld" element={<HomeOld/>}/>

              {/* <Route exact path="/admin" element={<Admin/>}/> */}
              <Route exact path="/profile" element={<PrivateRoute><UserProfile/></PrivateRoute>}/>

              
              {/* <Route exact path="/homenew" element={<HomeNew/>}/> */}
              <Route exact path="/products" element={<Products/>}/>
              <Route exact path="/products/t-shirts" element={<TShirts/>}/>
              <Route exact path="/products/jumpers" element={<Jumpers/>}/>
              <Route exact path="/products/jeans" element={<Jeans/>}/>
              <Route exact path="/products/shorts" element={<Shorts/>}/>
              <Route exact path="/products/jackets" element={<Jackets/>}/>

              <Route exact path="/AddProduct" element={<PrivateRoute> <AddProduct /></PrivateRoute>}/>
              <Route exact path="/EditProduct/:id" element={<PrivateRoute> <EditProduct /></PrivateRoute>}/>
              <Route exact path="/ViewProduct/:id" element={<ViewProduct />}/>
              
              
              <Route exact path="/basket" element={<Basket />}/>
          </Routes>
         <Footer className="footer--pin"/>
       <React.Fragment/>
      </div>
    
  );
}

export default App;
