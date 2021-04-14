import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col , Image} from "react-bootstrap";
import FormContainer from "./FormContainer";
import Register from "../../../Images/register.svg"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    //
  };
  return (
    <FormContainer>
        <Row>
        <Col className="text-center my-4">
          <Image src={Register} alt="empty" className="w-75" />
        </Col>
      </Row>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label> Email Address </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="submit" variant="dark">
          Register
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          Already Have Account? <Link to={`/login`}> Login </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
