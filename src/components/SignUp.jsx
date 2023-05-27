import React, { useState } from "react";
import F1 from "../images/fi1.png";
import F2 from "../images/fi2.png";
import F6 from "../images/fi6.png";
import "../css/signup.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import Eyeslash from "../images/eye-slash.svg";
import Eyefill from "../images/eye-fill.svg";

function SignUp(props) {
  const [modalShow4, setModalShow4] = useState(false);
  const handleClose = () => {
    setModalShow4(false);
    props.onHide();
  };

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
    props.onHide();
  };

  function Close2(e) {
    setModalShow4(true);
    props.closeSignUp();
    e.preventDefault();
  }
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const [passwordVisible1, setPasswordVisible1] = useState(false);

  const handleToggle1 = () => {
    setPasswordVisible1(!passwordVisible1);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div>
          <div _ngcontent-c1 className="login-first">
            <p _ngcontent-c1 className="id-redy">
              Get your ready-made ID from whatsapp
            </p>
            <div _ngcontent-c1 className="row row-mr">
              <div _ngcontent-c1 className="col">
                <div _ngcontent-c1 className="limg">
                  <img _ngcontent-c1 src={F1} />
                </div>
                <div _ngcontent-c1 className="rdsc">
                  <span _ngcontent-c1>1 to 1</span>
                  <span _ngcontent-c1>Customer</span>
                  <span _ngcontent-c1>Support</span>
                </div>
                <div _ngcontent-c1 className="clrBoth" />
              </div>
              <div _ngcontent-c1 className="col">
                <div _ngcontent-c1 className="limg">
                  <img _ngcontent-c1 src={F2} />
                </div>
                <div _ngcontent-c1 className="rdsc">
                  <span _ngcontent-c1>24/7</span>
                  <span _ngcontent-c1>Instant</span>
                  <span _ngcontent-c1>Withdrawl</span>
                </div>
                <div _ngcontent-c1 className="clrBoth" />
              </div>
              <div _ngcontent-c1 className="col">
                <div _ngcontent-c1 className="limg">
                  <img _ngcontent-c1 src={F2} />
                </div>
                <div _ngcontent-c1 className="rdsc">
                  <span _ngcontent-c1>Safest</span>
                  <span _ngcontent-c1>Gaming</span>
                  <span _ngcontent-c1>ID Provider</span>
                </div>
                <div _ngcontent-c1 className="clrBoth" />
              </div>
              <div _ngcontent-c1 className="clrBoth" />
              <div _ngcontent-c1 className="whtsmain">
                <a
                  _ngcontent-c1
                  className="whtaBtn"
                  target="_blank"
                  href="https://wa.link/b30dl8"
                >
                  <img _ngcontent-c1 src={F6} />
                </a>
              </div>
              <div _ngcontent-c1 className="clrBoth" />
              <div _ngcontent-c1 className="borderdv">
                <span _ngcontent-c1 className="or-sep">
                  OR
                </span>
              </div>
            </div>
            <div _ngcontent-c1 className="clrBoth" />
          </div>

          <div className="login-second">
            <section className="secLogin">
              <div className="login-form">
                <form
                  className="login-main-bx registerForm"
                  name="registerForm"
                  noValidate
                >
                  <div className="col-12">
                    <div className="row">
                      <div className="col-12">
                        <div className="username-input">
                          <input
                            className="input-bx inputMaterial"
                            id="name"
                            placeholder="Name"
                            type="text"
                          />
                        </div>
                        <div className="clrBoth" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="username-input">
                          <input
                            id="username"
                            placeholder="username"
                            type="text"
                            className=" "
                          />
                        </div>
                        <div className="clrBoth" />
                      </div>
                      <div className="col-6">
                        <div className="username-input">
                          <input
                            id="email"
                            placeholder="Email"
                            type="email"
                            className="  ng-valid"
                          />
                        </div>
                        <div className="clrBoth" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="username-input">
                          <i className="preno">+91</i>
                          <input
                            id="mobile"
                            maxLength={10}
                            minLength={10}
                            placeholder="  Phone No"
                            type="text"
                            className="mobile1"
                          />
                        </div>
                        <div className="clrBoth" />
                      </div>
                      <div className="col-6">
                        {/**/}
                        <div className="clrBoth" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="username-input">
                          <select
                            className="form-select"
                            style={{ "border-bottom": "0px !important" }}
                          >
                            <option selected value="null">
                              {" "}
                              Select State{" "}
                            </option>
                            <option value={1}>Andhra Pradesh</option>
                          </select>
                        </div>
                        <div className="clrBoth" />
                      </div>
                      <div className="col-6">
                        <div className="username-input">
                          <select
                            className="form-select"
                            formcontrolname="city"
                          >
                            <option selected value="null">
                              Select city
                            </option>
                            <option value={1}>Hyderabad</option>
                          </select>
                        </div>
                        <div className="clrBoth" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="username-input pos">
                          <i className="fa fa-lock" />
                          <input
                            className="pass"
                            placeholder="Password"
                            type={passwordVisible ? "text" : "password"}
                          />
                          <a className="eye1" onClick={handleToggle}>
                            {passwordVisible ? (
                              <img src={Eyefill} />
                            ) : (
                              <img src={Eyeslash} />
                            )}
                          </a>
                        </div>
                        <div className="clrBoth" />
                      </div>
                      <div className="col-6">
                        <div className="password-input pos">
                          <i aria-hidden="true" className="fa fa-lock" />
                          <input
                            placeholder="Confirm Password"
                            type={passwordVisible1 ? "text" : "password"}
                            className="pass"
                          />
                          <a className="eye1" onClick={handleToggle1}>
                            {passwordVisible1 ? (
                              <img src={Eyefill} />
                            ) : (
                              <img src={Eyeslash} />
                            )}
                          </a>
                        </div>
                        <div className="clrBoth" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div>
                          <input
                            style={{ marginTop: "20px", width: "auto" }}
                            type="checkbox"
                            className
                          />
                        </div>
                        <p>
                          <span className="check-box">
                            {" "}
                            I am of legal age 18+ to gamble and I accept the{" "}
                            <a
                              className="text-decoration-none"
                              href="/page/terms-conditions"
                              style={{ color: "#de641f" }}
                            >
                              {" "}
                              Terms and Conditions{" "}
                            </a>{" "}
                            and{" "}
                            <a
                              className="text-decoration-none"
                              href="/page/aml-policy"
                              style={{ color: "#de641f" }}
                            >
                              {" "}
                              Privacy Policy{" "}
                            </a>
                            .
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="loBTm">
                      <div onClick={navigateToHome} className="logbk">
                        <a className="log-reg-btn"> &lt; Back </a>
                      </div>
                      <div className="logreg">
                        <button className="log-reg-btn">Register &gt;</button>
                      </div>
                      <div className="clrBoth" />
                    </div>
                    <div className="clrBoth" />
                    <div onClick={Close2} className="alrdy-main">
                      <a className="alredy log-reg-btn">
                        {" "}
                        Already Have Account ? Log In{" "}
                      </a>
                    </div>
                    <Login show={modalShow4} onHide={handleClose} />
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default SignUp;
