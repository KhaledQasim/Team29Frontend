import axios from "axios";
import style from "./style.css"
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useState } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { jwtAtom } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import configData from "../config.json";
const eye = <FontAwesomeIcon icon={faEye} />;




function Register() {
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [, setJwt] = useAtom(jwtAtom);
  const [disabled, setDisabled] = useState(false);
  // function handleSubmitz () {
  //   setDisabled(true);
  //   const form = e.currentTarget;
  //   // axiosSendLoginRequest();
    // setTimeout(() => {
    //   setDisabled(false);
    // }, 1250);
  // };
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  // const [validated,setValidated] = useState(false);
  function axiosSendLoginRequest() {
 
  
    axios
    .post("/auth/register", {
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
    })
    .then((res) => {
      setJwt(Cookies.get("jwt"));
      navigate("/");
    })
    .catch((error) => {
     
      if (error.response)
        setErrorMsg(JSON.stringify(error.response.data).slice(17, -2));
    });
    
      
    
    
  }
  const [validated, setValidated] = useState(false);
  // const [done, setDone] = useState(false);
  const handleSubmit = (event) => {
    setDisabled(true);
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } 
    setValidated(true);
    axiosSendLoginRequest();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);    
  };
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
              type="email"
              placeholder="Email"
              pattern="^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
       <Form.Group as={Col} md="4" controlId="password">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              minLength={8}
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              
            />
            <i id="register-eye" onClick={togglePasswordVisiblity} style= {style}>{eye}</i>
            <Form.Control.Feedback type="invalid">
              Please choose a password longer than 8 characters.
            </Form.Control.Feedback>
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
      <Button type="button" onClick={handleSubmit} disabled={disabled}>Register</Button>
    </Form>
    
  );
}

export default Register;
