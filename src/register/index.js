import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useUser } from "../userProvider";


function Register() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate()
  const user = useUser();
  const [disabled, setDisabled] = useState(false);
  const handleClick = (e) => {
    setDisabled(true);
    axiosSendLoginRequest();
    setTimeout(() => {
      setDisabled(false);
    }, 1250);
    
    
  }
  
  // useEffect(() => {
  //   if (user.jwt) navigate("/");
  // }, [user]);

  // function sendLoginRequest() {
  //   const reqBody = {
  //     email: email,
  //     password: password,
  //     username: username,
  //     firstname: firstName,
  //     lastname: lastName
  //   };
  //   fetch("auth/register", {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     method: "post",
  //     body: JSON.stringify(reqBody),
  //   })
  //     .then((response) => {
  //       if (response.status === 200)
  //         return Promise.all([response.json(), response.headers]);
  //       else
  //       setEmail("");
  //       setPassword("");
  //       setPassword2("");
  //       console.log(JSON.stringify(response.json()));
  //       return Promise.reject("response.json()");
  //     })
  //     .then(([body, headers]) => {
  //       user.setJwt(Cookies.get("jwt"));
  //     })
  //     .catch((message) => {
  //       setEmail("");
  //       setPassword("");
  //       setPassword2("");
  //       alert(message)
  //       // setErrorMsg(message);
  //     });
  //   }
      function axiosSendLoginRequest() {
        axios.post('auth/register',{
          email: email,
          password: password,
          username: username,
          firstname: firstName,
          lastname: lastName
        })
        .then((res) => {
          user.setJwt(Cookies.get("jwt"));
          navigate("/")
        })
        .catch((error) =>{
          setPassword("");
          setPassword2("");
          if(error.response) setErrorMsg(JSON.stringify(error.response.data).slice(17,-2));
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
      <Container>
        <Row>
          <Col>
            <div className="" style={{ color: "red", fontWeight: "bold" }}>
                {errorMsg}
            </div>
          </Col>
        </Row>
      </Container>
      <Button
        id="submit"
        variant="primary"
        type="button"
        disabled={disabled}
        // onClick={() => sendLoginRequest()}
        onClick={ handleClick}
      >
        Register
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