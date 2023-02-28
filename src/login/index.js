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
    sendLoginRequest();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);
  };
 
  function sendLoginRequest() {
    setErrorMsg("");
    const reqBody = {
      email: email,
      password: password,
    };

    fetch("auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200) return response.text();
        else if (response.status === 401 || response.status === 403) {
          setErrorMsg("Invalid username or password");
        } else {
          setErrorMsg(
            "Something went wrong, try again later or reach out to us"
          );
        }
      })
      .then((data) => {
        if (data) {
          setJwt(data);
          navigate("/");
        }
      });
  }

  return (
    <>
    
      <Form className="content-container">
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
    </Form>
    </>
   
  );
}

export default Login;
