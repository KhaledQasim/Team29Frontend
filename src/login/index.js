import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
import { useAtom } from "jotai";
import { jwtAtom } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [jwt,setJwt] = useAtom(jwtAtom);
  const [disabled, setDisabled] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

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
    <Form>
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
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </Form.Group>
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
  );
}

export default Login;
