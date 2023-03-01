


import React from 'react';
// import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Admin from './admin/index.js';
import MainLayoutRoutes from "./MainLayuotRoutes"

import { atom } from 'jotai';
import Cookies from 'js-cookie';
import { useMode } from './admin/theme';



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
  const [theme,colorMode] = useMode();

  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="*" element={<MainLayoutRoutes />} />
      </Routes>
    </Router>

    
  );
}

export default App;
