import { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Image } from "react-bootstrap";
import FormContainer from "./FormContainer";
import LoginImage from "../../../Images/login2.svg";
import { Auth } from "aws-amplify";
import { toast } from "react-toastify";
import PasswordMask from 'react-password-mask';
toast.configure();

const NewPassWord = ({match}) => {
    let history = useHistory();
    const email = match.params.email;
    const [password, setPassword] = useState("")
    const [vertificationCode, setVertificationCode] = useState("")
    const [loading, setLoading] = useState(false);

    const createPassword = async (e) => {
    	e.preventDefault();
    	setLoading(true);
    	try {
    		await Auth.forgotPasswordSubmit(
    			email,
    			vertificationCode.trim(),
    			password
    		);
    		toast.success("Password created successfully!", {
    			position: "top-right",
    			autoClose: 5000,
    			hideProgressBar: false,
    			closeOnClick: true,
    			pauseOnHover: true,
    			draggable: true
    		});
    		setLoading(false);
    		history.push(`/login`);
    	} catch (err) {
    		let error = err.message || "Something went wrong!";
    		toast.error(error, {
    			position: "top-right",
    			autoClose: 5000,
    			hideProgressBar: false,
    			closeOnClick: true,
    			pauseOnHover: true,
    			draggable: true
    		});
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
            <h4>Reset Password</h4>
            <div className="form-group">
          <label htmlFor="vertificationCode">Vertification Code</label>
          <input
            required
            type="text"
            className="form-control"
            name="vertificationCode"
            id="vertificationCode"
            value={vertificationCode}
            placeholder="For Eg: 1234"
            onChange={(e) => {
                setVertificationCode(e.target.value);
            }}
          />
        </div>
            <div className="form-group">
          <label htmlFor="password">Password</label>
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
        </div>
        <div className="row py-3">
                <div className="col-md-4 col-sm-12">
                    <button type="button" className="btn btn-dark w-100" disabled={loading} onClick = {(e) => createPassword(e)}>
                        Reset{loading ? "  " : ""}
                        <span className={loading ? "spinner-border spinner-border-sm" : ""} role="status" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="col-md-8 col-sm-12 py-md-0 py-3 text-center d-md-flex align-items-center justify-content-end text-muted">
                    Try signing in again?&nbsp;<Link to="/login"><span>Sign In</span></Link>
                </div>
            </div>
        </FormContainer>
    )
}

export default NewPassWord
