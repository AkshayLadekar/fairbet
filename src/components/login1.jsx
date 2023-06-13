import React, { useState, useEffect } from "react";
import "../css/login.css";
import Whatsapp from "../images/whatsapp-green.png";
import Modal from "react-bootstrap/Modal";
import SignUp from "./SignUp";
import Eyeslash from "../images/eye-slash.svg";
import Eyefill from "../images/eye-fill.svg";
import helper from "../helper";
import ClientCaptcha from "react-client-captcha";
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";
import { Routes, Route, useNavigate } from "react-router-dom";
// import "react-client-captcha/dist/index.css";

function Login1(props) {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginTrue, setLoginTrue] = useState(true);
  const [captchaCode, setCaptchaCode] = useState("");
  const [inputCaptchaCode, setInputCaptchaCode] = useState("");
  const [data, setData] = useState({});
  const cookies = new Cookies();

  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate("/");
  };

  let setChange = (e) => {
    e.preventDefault();
    setInputCaptchaCode(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const login = async () => {
    console.log("======> login");
    let data = JSON.stringify({
      user_name: userName,
      password: password,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/login",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        var data = response.data.data.token;
        var user = response.data.data.user_id;
        console.log("======>2", data);
        if (response.data.message === "Logged in successfully.") {
          const set = cookies.set("jwt-authorization", data);
          const userId = cookies.set("userId", user);
          console.log("=========>1278", userId);
          navigateToHome();
          console.log("=======>set", set);
          const get = cookies.get("userId");
          console.log("======>2", get);
          setModalShow3(false);

          props.onHide();
          setLoginTrue(true);
        }
        console.log("==========>1", data);
        setData(data);
        console.log("======>data", data);
      })
      .catch((error) => {
        setLoginTrue(false);
        console.log("=========>error", error);
        return error;
      });
  };
  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, []);

  useEffect(() => {}, [data]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    // if (!values.password) {
    //   errors.password = "Password is required!";
    // } else if (values.password < 4) {
    //   errors.password = "Password must be more than 4 characters";
    // } else if (values.password > 16) {
    //   errors.password = "Password cannot be more than 16 characters";
    // }
    return errors;
  };

  const [modalShow3, setModalShow3] = useState(false);

  const handleClose = () => {
    setFormValues({ username: "", email: "", password: "" });
    setModalShow3(false);
    props.onHide();
    setInputCaptchaCode("");
    setCaptchaCode("");
    setFormValues("");
    setFormErrors("");
  };

  const decryptData = (encryptedData) => {
    // Assuming encryptedData is "33??????????????"

    // Trim leading and trailing whitespace
    const trimmedData = encryptedData.trim(); // "33??????????????"

    // Remove unwanted characters using regular expression
    const cleanedData = trimmedData.replace(/[^0-9a-zA-Z]/g, ""); // "33"

    return cleanedData;
  };

  function modalClose(e) {
    setModalShow3(true);
  }

  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div>
      <div className="container login login1">
        <h2 className="text-center log">LOGIN</h2>
        <form className="logform" onSubmit={handleSubmit}>
          <label>
            Username/ Email / Mobile Number:
            <input
              type="text"
              className="input-search"
              name="username"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </label>
          <label>
            Password:
            <br />
            <input
              type={passwordVisible ? "text" : "password"}
              className="input-search"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <a className="eye" onClick={handleToggle}>
              {passwordVisible ? <img src={Eyefill} /> : <img src={Eyeslash} />}
            </a>
          </label>
          <p>{formErrors.password}</p>
          {/* <div className="captchanew">
                <input
                  onChange={(e) => {
                    setChange(e);
                  }}
                  className="input-search inpsearch"
                  placeholder="Enter Captcha"
                  type="text"
                />
                <ClientCaptcha
                  chars={
                    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
                  }
                  captchaCode={(chars) => {
                    setCode(chars);
                  }}
                />
              </div> */}

          <label style={{ marginTop: "-1.5rem" }}>Forget Password ?</label>
          {loginTrue ? (
            <></>
          ) : (
            <span className="error">Invalid Credentials</span>
          )}
          <div className="btnss">
            <button
              className="loginbtn mb-4"
              type="submit"
              onClick={() => {
                console.log("=================", captchaCode, inputCaptchaCode);

                login();
              }}
            >
              LOGIN
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={modalClose}
              className="loginbtn"
              type="submit"
            >
              SIGN UP
            </button>
          </div>
          {/* <SignUp
                        show={modalShowSignUp}
                        onHide={() => setModalShowSignUp(false)}
                      /> */}

          <SignUp
            closeSignUp={() => setModalShow3(false)}
            show={modalShow3}
            onHide={handleClose}
          />
          <div _ngcontent-c1 className="id-join">
            <a _ngcontent-c1 className="msgId" href="https://wa.link/n8a7gq">
              <img
                _ngcontent-c1
                alt="whatsapp"
                src={Whatsapp}
                style={{ height: "28px" }}
              />{" "}
              Message For ID.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login1;
