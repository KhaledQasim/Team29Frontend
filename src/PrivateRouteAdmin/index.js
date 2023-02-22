import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ajax from '../services/fetchService.js';
import jwt_decode from "jwt-decode";
import { useUser } from '../userProvider/index.js';
const PrivateRouteAdmin = (props) => {
    const user = useUser();
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState("");
    const { children} = props;
    const [roles, setRoles] = useState(getRolesFromJWT);

    // const [roles, setRoles] = useState(getRolesFromJWT);

    // useEffect(() => {
    //   setRoles(getRolesFromJWT());
    // }, [user.jwt]);

    useEffect(() => {
      if (user && user.jwt) {
        setRoles(getRolesFromJWT());
      }
    }, [user, user.jwt]);

    function getRolesFromJWT() {
      if(user.jwt){
        const decodedJwt = jwt_decode(user.jwt);
        return JSON.stringify(decodedJwt.authorities);
      }
      return [];
    };
    
    if (user.jwt && user && roles.includes("ADMIN")) {
      ajax(`/auth/validate`, "get", user.jwt).then((isValid) => {
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
  