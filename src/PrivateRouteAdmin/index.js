import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import ajax from '../services/fetchService.js';
import jwt_decode from "jwt-decode";
import { useAtom } from 'jotai';
import { jwtAtom } from '../App.js';

const PrivateRouteAdmin = (props) => {
    const [jwt,setJwt] = useAtom(jwtAtom);
    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setIsValid] = useState("");
    const { children} = props;
    const [roles, setRoles] = useState(getRolesFromJWT);

    // const [roles, setRoles] = useState(getRolesFromJWT);

    // useEffect(() => {
    //   setRoles(getRolesFromJWT());
    // }, [user.jwt]);

    useEffect(() => {
      if (jwt) {
        setRoles(getRolesFromJWT());
      }
    }, [jwt]);

    function getRolesFromJWT() {
      if(jwt){
        const decodedJwt = jwt_decode(jwt);
        return JSON.stringify(decodedJwt.authorities);
      }
      return [];
    };
    
    if (jwt && roles.includes("ADMIN")) {
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
      <Navigate to="/login" />
    );
  };
  
  export default PrivateRouteAdmin;
  