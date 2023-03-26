import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBInputGroup,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import style from "./style.css"
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import { useAtom } from "jotai";
import { jwtAtom } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Cookies from "js-cookie";
import configData from "../config.json";
import image from "../products/images/we_WEAR-8.png";
const eye = <FontAwesomeIcon icon={faEye} />;

function Login() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [,setJwt] = useAtom(jwtAtom);
  const [disabled, setDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  const handleClick = (e) => {
    setDisabled(true);
    axiosSendLoginRequest();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);
  };
 
  function axiosSendLoginRequest() {
        axios
        .post("/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          setJwt(Cookies.get("jwt"));
          navigate("/");
        })
        .catch((error) => {
         
          if (error.response)
            // setErrorMsg(JSON.stringify(error.response.data).slice(17, -2));
            setErrorMsg("Invalid Username or Password!")
        });
        
          
        
        
  }

  return (
    <>
    
      {/* <Form className="content-container">
      <Row className="mb-3">
      <Form.Group className="mb-3" controlId="email" as={Col} md="6">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="password" as={Col} md="5">
        <Form.Label>Password</Form.Label>
        <InputGroup>
          <Form.Control
            type={passwordShown ? "text" : "password"}
            // type="password"
            placeholder="Password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <i id="login-eye" onClick={togglePasswordVisiblity} style= {style}>{eye}</i>
        </InputGroup>
        
      </Form.Group>
      
    </Row>
    
      {errorMsg ? (
        <Container>
            <Row className="justify-content-center mb-4">
              <Col md="8" lg="6">
                <div className="" style={{ color: "red", fontWeight: "bold" }}>
                  {errorMsg}
                </div>
              </Col>
            </Row>
        </Container>
        ) : (
          <></>
        )}
      <Button
        id="submit"
        variant="primary"
        type="button"
        disabled={disabled}
        // onClick={() => sendLoginRequest()}
        onClick={handleClick}
      >
        Login
      </Button>
      <Button
        className="mx-2"
        id="exit"
        variant="secondary"
        type="button"
        // onClick={() => sendLoginRequest()}
        onClick={() => {
          navigate("/");
        }}
      >
        Cancel
      </Button>
    </Form> */}

<MDBContainer className='my-5 content-container'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src={image} alt='logo' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>

            <MDBCardBody>

            
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <MDBInputGroup>
                  <Form.Control
                    type={passwordShown ? "text" : "password"}
                    // type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </MDBInputGroup>
                
              </Form.Group>

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>
                
              {errorMsg ? (
                <Container>
                    <Row className="justify-content-center mb-4">
                      <Col md="8" lg="6">
                        <div className="" style={{ color: "red", fontWeight: "bold" }}>
                          {errorMsg}
                        </div>
                      </Col>
                    </Row>
                </Container>
                ) : (
                  <></>
                )}
            
            <Button
            id="submit"
            variant="primary"
            type="button"
            disabled={disabled}
            // onClick={() => sendLoginRequest()}
            onClick={handleClick}
          >
            Login
          </Button>
          <Button
            className="mx-2"
            id="exit"
            variant="secondary"
            type="button"
            // onClick={() => sendLoginRequest()}
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
            </Button>

            </MDBCardBody>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>


    </>
   
  );
}

export default Login;
