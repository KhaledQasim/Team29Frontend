
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';
import Login from "./login/index";
import Admin from './admin';
import Test from './test';
import Products from './products/Products';
import PrivateRoute from './PrivateRoute';
import Register from './register';
import PrivateRouteAdmin from './PrivateRouteAdmin';
import { atom } from 'jotai';
import Cookies from 'js-cookie';
import Logout from './logout';

export const jwtAtom = atom(Cookies.get("jwt"));
export const Atomlogged = atom("");
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
      <Router>
        <Navbar />
          <Routes>
            <Route exact path="/admin" element={<PrivateRouteAdmin> <Admin /></PrivateRouteAdmin>}/>
            {/* <Route exact path="/admin" element={<Admin/>}/> */}
            <Route exact path="/test" element={<Test/>}/>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/products" element={<Products/>}/>
            <Route exact path="/AddProduct" element={<PrivateRoute> <AddProduct /></PrivateRoute>}/>
            <Route exact path="/logout" element={<Logout />}/>
            <Route exact path="/EditProduct/:id" element={<PrivateRoute> <EditProduct /></PrivateRoute>}/>
            <Route exact path="/ViewProduct/:id" element={<ViewProduct />}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
