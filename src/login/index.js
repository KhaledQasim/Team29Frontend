import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";
import jwt_decode from "jwt-decode";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [disabled, setDisabled] = useState(false);
  const handleClick = (e) => {
    setDisabled(true);
    sendLoginRequest();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);
  };
 
 

  function sendLoginRequest() {
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
        if (response.status === 200) return Promise.all([response.json()]);
        else setEmail("");
        setPassword("");
        return Promise.reject("Invalid Login!");
      })
      .then(([body]) => {
        setJwt(JSON.stringify(body).slice(10, -2));
        window.location.href = "/";
      })
      .catch((message) => {
        setEmail("");
        setPassword("");
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
