import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ajax from '../services/fetchService.js';
import { useLocalState } from '../util/useLocalStorage';
import jwt_decode from "jwt-decode";
const PrivateRouteAdmin = ({children}) => {
    const [jwt,setJwt] = useLocalState("","jwt");
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState("");
    const [roles, setRoles] = useState(getRolesFromJWT());

    function getRolesFromJWT() {
      if(jwt){
        const decodedJwt = jwt_decode(jwt);
        return JSON.stringify(decodedJwt.authorities);
      }
       
    };
    
    if ((jwt) && (roles.includes("ADMIN"))) {
      ajax(`/auth/validate?token=${jwt}`, "get", jwt).then((isValid) => {
        setIsValid(isValid);
        setIsLoading(false);
      });
    } else {
      return <Navigate to="/" />;
    }
  
    return isLoading ? (
      <div>Loading...</div>
    ) : isValid === true ? (
      children
    ) : (
      <Navigate to="/login" />
    );
  };
  
  export default PrivateRouteAdmin;
  