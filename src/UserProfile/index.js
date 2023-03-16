import axios from "axios";
import style from "./style.css"
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import React, { useEffect, useState } from 'react'
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { jwtAtom } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import configData from "../config.json";
import jwt_decode from "jwt-decode";
import { Alert } from "@mui/material";


const eye = <FontAwesomeIcon icon={faEye} />;

function Profile() {
 
  useEffect(() => {
    getUserInfo();
  },[])
 

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);
  const [password, setPassword] = useState("");
  
  const [jwt, setJwt] = useAtom(jwtAtom);
  const [disabled, setDisabled] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  function  getUserEmail () {
    if (jwt) {
      const decodedJwt = jwt_decode(jwt);
      return JSON.stringify(decodedJwt.sub).slice(1,-1);
    }
    
    return[];
  };

  const editUserPassword = async() => {
    await axios.put(`/singleUser/editUserPassword/${getUserEmail()}`, {password: password} ,{ headers: { "Authorization": `Bearer ${jwt}` } })
      .then((res) => {
        setErrorMsg(null);
        setSuccessMsg("Password has been updated!");
        console.log(res);
    })
      .catch((error) => {
        console.log(error)
        if (error.response) {
          setSuccessMsg(null);
          setErrorMsg("Could not update password!");
    
        }
    })
    
  }

  const editUserNames = async() => {
    await axios.put(`/singleUser/editUser/${getUserEmail()}`, {firstname: firstName, lastname:lastName} ,{ headers: { "Authorization": `Bearer ${jwt}` } })
      .then((res) => {
        setErrorMsg(null);
        setSuccessMsg("User Names have been updated!");
        console.log(res);
    })
      .catch((error) => {
        console.log(error)
        if (error.response) {
          setSuccessMsg(null);
          setErrorMsg("Could not update names!");
    
        }
    })
    
  }




  function axiosChangeRequestNames() {
 
    if (firstName.match(/^.{1,}$/) && lastName.match(/^.{1,}$/)) {
      editUserNames();
    }
    else {
      setErrorMsg("The provided names are invalid, names can not be blank!");
    }
  }


  function axiosChangeRequestPassword() {
    if (password.match(/^(?=\S+$).{8,}$/)) {
      editUserPassword();
    }
    else {
      setErrorMsg("The provided password is invalid, it must be 8 characters or longer and can not be empty!");
    }
  }


  const [validated, setValidated] = useState(false);
  
  const handleSubmit = (event) => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setDisabled(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true);
    axiosChangeRequestNames();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);    
  };

  
  const handleSubmitPassword = (event) => {
    setErrorMsg(null);
    setSuccessMsg(null);
    setDisabled(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true);
    axiosChangeRequestPassword();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);    
  };

  const getUserInfo = async() => {
    const result = await axios.get(`/singleUser/getByUsername/${getUserEmail()}`,{ headers: {"Authorization" : `Bearer ${jwt}`} })
    setFirstName(result.data.firstname);
    setLastName(result.data.lastname);
  }
 

  return (
   
    <Form  noValidate validated={validated} onSubmit={handleSubmit} className="content-container">
      <Row className="mb-3">

        <Form.Group as={Col} md="4" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please choose a first name.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please choose a last name.
            </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="4" controlId="email">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              disabled
              value={getUserEmail()}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
       <Form.Group as={Col} md="4" controlId="password">
          <Form.Label>Password (leave blank to keep the same.)</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              minLength={8}
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              required
              pattern="^(?=\S+$).{8,}$"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              
            />
            <i id="register-eye" onClick={togglePasswordVisiblity} style= {style}>{eye}</i>
            <Form.Control.Feedback type="invalid">
              Please choose a password longer than 8 characters and has no spaces.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>     
      </Row>

      {
              successMsg ?
               
                <Alert severity="success" >{successMsg}
                 
                </Alert>
           
                
                :<></>
               
            }
            {
               errorMsg ?
                  
                <Alert severity="error">{errorMsg}</Alert>
                
                
              : <></>
            }
      <Button style={{marginTop:"10px"}} type="button" onClick={handleSubmit} disabled={disabled}>Update Names</Button>
      <Button style={{marginLeft:"25px", marginTop:"10px"}} type="button" onClick={handleSubmitPassword} disabled={disabled}>Update Password</Button>
    </Form>
    
  );
}

export default Profile;
