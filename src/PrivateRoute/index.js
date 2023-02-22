import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import ajax from '../services/fetchService.js';
import { useUser } from '../userProvider/index.js';

const PrivateRoute = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState("");
    const { children} = props;
    const user = useUser();
    
    if (user && user.jwt) {
      ajax(`/auth/validate`, "get", user.jwt).then((isValid) => {
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
      
      <Navigate to="/" />
    );
  };
  
  export default PrivateRoute;
  