import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col , Image} from "react-bootstrap";
import FormContainer from "./FormContainer";
import Register from "../../../Images/register.svg"


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   //
  // };
  return (
    <FormContainer>
        <Row>
        <Col className="text-center my-4">
          <Image src={Register} alt="empty" className="w-75" />
        </Col>
      </Row>
      <h1>Sign Up</h1>
      <form>
      <div className="form-group">
          <label htmlFor="collectionName">Name*</label>
          <input
            required
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={name}
            placeholder="For Eg: rachelgreen@gmail.com"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collectionName">Email*</label>
          <input
            required
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={email}
            placeholder="For Eg: rachelgreen@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="collectionName">Password*</label>
          <input
            required
            type="password"
            className="form-control"
            name="password"
            id="passeord"
            value={password}
            placeholder="For Eg: ********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
      </form>
      <Row className="py-3">
        <Col>
          Already Have Account? <Link to={`/login`}> Login </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
