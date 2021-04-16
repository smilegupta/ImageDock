/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col, Image } from "react-bootstrap";
import FormContainer from "./FormContainer";
import LoginImage from "../../../Images/signIn.svg";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import _ from "lodash";
toast.configure();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await Auth.signIn(email, password);
      console.log("successfully signed in", user);
      let message = "Signed in successfully! Welcome back!!";
      toast.success(message, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setLoading(false);
    } catch (error) {
      console.log("error signing in", error);
      setLoading(false);
    }
  };

  return (
    <FormContainer>
      <Row>
        <Col className="text-center my-4">
          <Image src={LoginImage} alt="empty" className="w-75" />
        </Col>
      </Row>
      <h1>Sign In</h1>
      <form>
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
      <button
        type="button"
        onClick={(e) => handleSubmit(e)}
        className="btn btn-primary"
      >
        Sign In {loading ? " " : ""}
        <span
          className={loading ? "spinner-border spinner-border-sm" : ""}
          role="status"
          aria-hidden="true"
        ></span>
      </button>

      <Row className="py-3">
        <Col>
          New User? <Link to={`/register`}> Register </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
