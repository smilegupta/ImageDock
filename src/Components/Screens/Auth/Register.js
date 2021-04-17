import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col , Image} from "react-bootstrap";
import FormContainer from "./FormContainer";
import Register from "../../../Images/register.svg"
import { Auth } from "aws-amplify";
import PasswordMask from 'react-password-mask';
import { toast } from "react-toastify";
toast.configure();


const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { user } = await Auth.signUp({
          username,
          password,
      });
      console.log(user);
      let message = "Verification email successfully. Please verify your account by clicking that link before logging in.";
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
    toast.error(error.message, {
      position: "top-right",
      autoClose: 0,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setLoading(false);
  }
  };
  return (
    <FormContainer>
        <Row>
        <Col className="text-center my-4">
          <Image src={Register} alt="empty" className="w-75" />
        </Col>
      </Row>
      <h4>Sign Up</h4>
      <form>
        <div className="form-group">
          <label htmlFor="username">Email*</label>
          <input
            required
            type="username"
            className="form-control"
            name="username"
            id="username"
            value={username}
            placeholder="For Eg: rachelgreen@gmail.com"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
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
    					showButtonContent={(<i className="la la-eye"></i>)}
    					hideButtonContent={(<i className="la la-eye-slash"></i>)}
    				/>
        </div>
      </form>
      <button
        type="button"
        onClick={(e) => submitHandler(e)}
        className="btn btn-primary"
        disabled={loading}
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
          Already Have Account? <Link to={`/login`}> Login </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default Login;
