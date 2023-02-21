import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useLocalState } from "../util/useLocalStorage";

function Register() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  const [jwt , setJwt] = useLocalState("", "jwt");
  const [disabled, setDisabled] = useState(false);
  const handleClick = (e) => {
    setDisabled(true);
    sendLoginRequest();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);
    
    
  }

  function sendLoginRequest() {
    const reqBody = {
      email: email,
      password: password,
      username: username,
      firstname: firstName,
      lastname: lastName
    };
    fetch("auth/register", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body: JSON.stringify(reqBody),
    })
      .then((response) => {
        if (response.status === 200)
          return Promise.all([response.json()]);
        else
        setEmail("");
        setPassword("");
        setPassword2("");
        return Promise.reject("Invalid Login!");
      })
      .then(([body]) => {
        setJwt(JSON.stringify(body).slice(10, -2));
        window.location.href = "admin";
      })
      .catch((message) => {
        setEmail("");
        setPassword("");
        setPassword2("");
        alert(message);
      });
  }
  return (
    <Form >
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

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Name"
          value={firstName}
          onChange={(event) => setFirstName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(event) => setLastName(event.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </Form.Group>

      <Button
        id="submit"
        variant="primary"
        type="button"
        disabled={disabled}
        // onClick={() => sendLoginRequest()}
        onClick={ handleClick}
      >
        Login
      </Button>
      <Button
        className="mx-2"
        id="exit"
        variant="secondary"
        type="button"
        // onClick={() => sendLoginRequest()}
        onClick={() => {navigate("/")}}
      >
        Cancel
      </Button>
    </Form>
  );
}

export default Register;