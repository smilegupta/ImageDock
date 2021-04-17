/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import FormContainer from "./FormContainer";
import LoginImage from "../../../Images/signIn.svg";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import PasswordMask from 'react-password-mask';
toast.configure();

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendEmail, setResendEmail] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
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
    } catch (err) {
      let error = err.message
      if (err.message === 'User is not confirmed.') {
        error = 'Your account verification not complete. Please complete the verification before logging in.'
      }
      toast.error(error, {
        position: "top-right",
        autoClose: 0,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      if (err.message === 'User is not confirmed.') setResendEmail(true);
      setLoading(false);
    }
  };

  const resendConfirmationLink = async (e) => {
    e.preventDefault()
    try {
      await Auth.resendSignUp(email);
      toast.success('Verification email resent successfully. Please verify your account by clicking that link before logging in.', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      setResendEmail(false)
    } catch (err) {
      let error = err.message || 'Something went wrong!';
      toast.error(error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
    }
  }

  return (
    <FormContainer>
      <Row>
        <Col className="text-center my-4">
          <Image src={LoginImage} alt="empty" className="w-75" />
        </Col>
      </Row>
      <h4>Sign In</h4>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email*</label>
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
          {
            resendEmail && <p className="text-danger text-right cursor-pointer" onClick={(e) => resendConfirmationLink(e)}> Missed Confirmation Link?</p>
          }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password*</label>
          <PasswordMask
            name="password"
            value={password}
            inputClassName="form-control"
            buttonClassName="password-show"
            placeholder="For Eg: ********"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            showButtonContent={(<i className="la la-eye" style={{ background: "transparent !important" }}></i>)}
            hideButtonContent={(<i className="la la-eye-slash"></i>)}
          />
          <p className="text-muted text-right cursor-pointer"> Forgot Password? <Link to = {`/forgot-password/${email}`}><span className="text-dark">
            Click here</span></Link> </p>
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