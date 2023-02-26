import axios from "axios";
import { useFormik } from "formik";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { useState } from "react";
import { Col, Container, InputGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { jwtAtom } from "../App";





function Register() {
  const [errorMsg, setErrorMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
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
 

  // const [validated,setValidated] = useState(false);
  function axiosSendLoginRequest() {
 
  
    axios
    .post("auth/register", {
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
      setPassword("");
      setPassword2("");
      setPassword2("");
      if (error.response)
        setErrorMsg(JSON.stringify(error.response.data).slice(17, -2));
    });
    
      
    
    
  }
  const [validated, setValidated] = useState(false);
  const [done, setDone] = useState(false);
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
    // <Form noValidate validated={validated} onSubmit={handleSubmit}>

    //   <Form.Group className="mb-3" controlId="email">
    //     <Form.Label>Email address</Form.Label>
    //     <InputGroup hasValidation>
    //       <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
    //       <Form.Control
    //         required
    //         aria-describedby="inputGroupPrepend"
    //         type="email"
    //         placeholder="Enter email"
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //       />
    //       <Form.Control.Feedback type="invalid">Please fill email!</Form.Control.Feedback>
    //     </InputGroup> 
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="password">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(event) => setPassword(event.target.value)}
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="password2">
    //     <Form.Label>Confirm Password</Form.Label>
    //     <Form.Control
    //       type="password"
    //       placeholder="Confirm Password"
    //       value={password2}
    //       onChange={(event) => setPassword2(event.target.value)}
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="firstName">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Name"
    //       value={firstName}
    //       onChange={(event) => setFirstName(event.target.value)}
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="lastName">
    //     <Form.Label>Last Name</Form.Label>
    //     <Form.Control
    //       type="text"
    //       placeholder="Last Name"
    //       value={lastName}
    //       onChange={(event) => setLastName(event.target.value)}
    //     />
    //   </Form.Group>

      // {errorMsg ? (
      //   <Container>
      //     <Row className="justify-content-center mb-4">
      //       <Col md="8" lg="6">
      //         <div className="" style={{ color: "red", fontWeight323: "bold" }}>
      //           {errorMsg}
      //         </div>
      //       </Col>
      //     </Row>
      //   </Container>
      // ) : (
      //   <></>
      // )}

    //   <Button
    //     id="submit"
    //     variant="primary"
    //     type="button"
    //     disabled={disabled}
    //     // onClick={() => sendLoginRequest()}
    //     onClick={handleClick}
    //   >
    //     Register
    //   </Button>
    //   <Button
    //     className="mx-2"
    //     id="exit"
    //     variant="secondary"
    //     type="button"
    //     // onClick={() => sendLoginRequest()}
    //     onClick={() => {
    //       navigate("/");
    //     }}
    //   >
    //     Cancel
    //   </Button>
    // </Form>
    <Form  noValidate validated={validated} onSubmit={handleSubmit} >
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
              Please choose a email.
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
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Please choose a password longer than 8 characters.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>   
      </Row>

      {/* <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row> */}
      
      {/* <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group> */}
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
      <Button type="button" onClick={handleSubmit} disabled={disabled}>Submit form</Button>
    </Form>
    
  );
}

export default Register;
