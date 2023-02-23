import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { jwtAtom } from '../App.js';
import ajax from '../services/fetchService.js';

const PrivateRoute = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState("");
    const { children} = props;
    const [jwt,] = useAtom(jwtAtom);
    
    if (jwt) {
      ajax(`/auth/validate`, "get", jwt).then((isValid) => {
        setIsValid(isValid);
        setIsLoading(false);
      });
    } else {
      return <Navigate to="/login" />;
    }
  
    return isLoading ? (
      <div>Loading...</div>
    ) : isValid === true ? (
      
      children
    ) : (
      
      <Navigate to="/logout" />
    );
  };
  
  export default PrivateRoute;
  