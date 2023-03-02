import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ajax from '../services/fetchService.js';
import jwt_decode from "jwt-decode";
import { useAtom } from 'jotai';
import { jwtAtom } from '../App.js';
import configData from "../config.json";
const PrivateRouteAdmin = (props) => {
    const [jwt,] = useAtom(jwtAtom);
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState("");
    const { children } = props;
    const [role] = useState(getJwtAuth);

    function  getJwtAuth () {
      if (jwt) {
        const decodedJwt = jwt_decode(jwt);
        return JSON.stringify(decodedJwt.authorities);
      }
      
      return[];
    };
  
    
    if (jwt && role.includes("ADMIN")) {
      
      ajax(`/auth/validate`, "get", jwt).then((isValid) => {
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
      <Navigate to="/logout" />
    );
  };
  
  export default PrivateRouteAdmin;
  