


import React from 'react';
// import Home from './Home';
import { Routes, Route } from 'react-router-dom';


import Admin from './AdminLayoutRoutes';
import MainLayoutRoutes from "./MainLayuotRoutes"

import { atom } from 'jotai';
import Cookies from 'js-cookie';

import PrivateRouteAdmin from './PrivateRouteAdmin/index.js';


export const jwtAtom = atom(Cookies.get("jwt"));
export const Atomlogged = atom("");
export const AtomAdmin = atom("");


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
  
      
      

      <Routes> 
        <Route path="/admin/*" element={<PrivateRouteAdmin><Admin /></PrivateRouteAdmin>} />
        <Route path="*" element={<MainLayoutRoutes />} />
      </Routes>
  

      
 


    
  );
}

export default App;
