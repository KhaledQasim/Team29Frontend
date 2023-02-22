import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocalState } from "../util/useLocalStorage";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [jwt, setJwt] = useLocalState("", "jwt");

  function sendLoginRequest() {
    const reqBody = {
      email: email,
      password: password,
    };
    fetch("http://172.105.133.208:8080/auth/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200) return Promise.all([response.json()]);
        else return Promise.reject("Invalid Login!");
      })
      .then(([body]) => {
        setJwt(JSON.stringify(body).slice(10, -2));
        window.location.href = "admin";
      })
      .catch((message) => {
        alert(message);
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

      <Button
        id="submit"
        variant="primary"
        type="button"
        onClick={() => sendLoginRequest()}
      >
        Submit
      </Button>
    </Form>
  );
}

export default Login;
