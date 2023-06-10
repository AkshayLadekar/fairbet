import React, { useState, useEffect } from "react";
import F1 from "../images/fi1.png";
import F2 from "../images/fi2.png";
import F6 from "../images/fi6.png";
import "../css/signup.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Login from "./Login";
import Eyeslash from "../images/eye-slash.svg";
import Eyefill from "../images/eye-fill.svg";
import action from "../Redux/Action/action";
import constants from "../Redux/constant";
import helper from "../helper";
import axios from "axios";
import Cookies from "universal-cookie";
import jwtDecode from "jwt-decode";

function SignUp(props) {
  const [modalShow4, setModalShow4] = useState(false);
  const [name, setName] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const [checkUser, setCheckUser] = useState([]);
  const [userMessage, setUserMessage] = useState("");
  const [emailExist, setEmailExist] = useState(false);
  const [apiCall, setApiCall] = useState(false);
  const [apiCallEmail, setApiCallEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameCheck, setUserNameCheck] = useState("");
  const [userMobileCheck, setUserMobileCheck] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [mobileCheck, setMobileCheck] = useState(false);
  const [otp, setOtp] = useState("");
  const [phoneNo, setPhoneNo] = useState(false);
  const [stateId, setStateId] = useState("");
  const [id, setId] = useState("");
  const [getCity, setGetCity] = useState([]);
  const [option, setOption] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasword, setConfirmPassword] = useState("");
  const [click, setClick] = useState(false);
  const [verif, setVerif] = useState("");
  const [apiCallUser, setApiCallUser] = useState(false);
  const [notValidate, setNotvalidate] = useState(false);
  const [validMobile, setValidMobile] = useState(true);
  const [value, setValue] = useState("");
  const [cityId, setCityId] = useState("");
  const [verifyOtpv, setVerifyOtpv] = useState(false);
  const [RegisterResponse, setRegisterResponse] = useState("");
  const [userNameVerify, setUserNameVerify] = useState(false);
  const [emailVerify, setEmailVerify] = useState(false);
  const [mobileVerify, setMobileVerify] = useState(false);
  const cookies = new Cookies();

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const get = cookies.get("jwt-authorization");
  console.log("=================>6", get);
  const userMobileExist = () => {
    // let data = JSON.stringify({
    //   mobile: helper.Encryption(otp)
    // });
    let data = JSON.stringify({
      mobile: otp,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/userMobileExist",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        let res = response.data.message;
        if (
          response.data.message === "Mobile number available" &&
          otp !== "" &&
          otp.length === 10
        ) {
          setMobileVerify(true);
        }
        setMobileCheck(true);
        setUserMobileCheck(res);
      })
      .catch((error) => {
        throw error;
      });
  };
  // useEffect(() => {}, [userMobileCheck]);
  useEffect(() => {}, [userNameCheck]);
  useEffect(() => {}, [userMessage]);

  useEffect(() => {
    console.log("==================>123", otp.length);
    const regex = /^[0-9]{0,10}$/;
    if (regex.test(otp) && otp.length === 10) {
      setPhoneNo(true);
    } else {
      setValidMobile(false);
    }
  }, [otp]);

  const userNameExistOrNot = () => {
    // let data = JSON.stringify({
    //   user_name: helper.Encryption(userName),
    // });
    let data = JSON.stringify({
      user_name: userName,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/usernameexistornot",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        setApiCallUser(true);
        let data = response.data.message;
        console.log("======>", data === "User Name available", userName !== "");
        if (
          response.data.message === "User Name available" &&
          userName !== ""
        ) {
          setUserNameVerify(true);
        }
        setUserNameCheck(response.data.message);
      })
      .catch((error) => {
        throw error;
      });
  };

  const handleCheckUserName = () => {
    if (userName !== "") {
      userNameExistOrNot();
    }
  };

  const handleChangeEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValid(validateEmail(inputEmail));
  };
  const handleOtp = (e) => {
    setVerif(e.target.value);
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleClose = () => {
    setModalShow4(false);
    props.onHide();
  };
  const dispatch = useDispatch();
  const result = useSelector((state) => state.selectState[0]);

  const SendOtp = () => {
    // let data2 = {
    //   mobile: helper.Encryption(otp),
    // };
    let data2 = {
      mobile: otp,
    };
    let config2 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/sendOtp",
      headers: {
        "Content-Type": "application/json",
      },
      data: data2,
    };

    axios
      .request(config2)
      .then((response) => {})
      .catch((error) => {
        throw error;
      });
  };

  // const handleCheckUserMobile = () => {
  //   if (otp.length === 10 && otp !== "") {
  //     userMobileExist();
  //     SendOtp()
  //   }
  // };

  const handleMobile = (e) => {
    console.log("8787887878778", userMobileCheck);
    setOtp(e.target.value);
  };

  const handleCheckUserExist = () => {
    if (email != "") {
      userExistOrNot();
    }
  };

  const userExistOrNot = (e) => {
    // let data1 = JSON.stringify({
    //   email: helper.Encryption(email),
    // });
    let data1 = JSON.stringify({
      email: email,
    });

    let config1 = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/userexistornot",
      headers: {
        "Content-Type": "application/json",
      },
      data: data1,
    };

    axios
      .request(config1)
      .then((response) => {
        var data2 = response.data.message;
        if (response.data.message === "Email available" && email !== "") {
          setEmailVerify(true);
        }
        setUserMessage(data2);
        console.log("userMessage", userMessage);
        setCheckUser(data2);
        setApiCall(true);
        setIsValid(true);
      })
      .catch((error) => {
        throw error;
      });
  };

  useEffect(() => {
    if (otp.length === 10 && otp !== "") {
      userMobileExist();
      if (userMobileCheck === "Mobile number available") {
        SendOtp();
      }
      // SendOtp();
    }
  }, [otp.length == 10, userMobileCheck]);

  useEffect(() => {
    const call = async () => {
      const body = {
        url: "https://dpboss.deals/api/auth/getStateList",
        body: null,
        method: "get",
        params: "",
      };
      ApiCall(body);
    };
    call();
  }, []);
  const decryptData = (encryptedData) => {
    // Assuming encryptedData is "33??????????????"

    // Trim leading and trailing whitespace
    const trimmedData = encryptedData.trim(); // "33??????????????"

    // Remove unwanted characters using regular expression
    const cleanedData = trimmedData.replace(/[^0-9a-zA-Z]/g, ""); // "33"

    return cleanedData;
  };

  const handleChange = (e) => {
    var id1 = `${e.target.value}`;
    setStateId(e.target.value);
    city(id1);
  };

  const ApiCall = async (body) => {
    let data = body.reqData ? JSON.stringify(body.reqData) : "";
    let config = {
      method: body.method,
      maxBodyLength: Infinity,
      url: body.url,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        var data = response.data.data;
        setDataArray(data);
        return response.data.data;
      })
      .catch((error) => {
        return error;
      });
  };
  useEffect(() => {
    console.log("======>", stateId);
  }, [stateId]);
  useEffect(() => {
    console.log("======>", cityId);
  }, [cityId]);
  useEffect(() => {
    console.log("======>", name);
  }, [name]);

  const city = async (id) => {
    // let data = JSON.stringify({
    //   state_id: helper.Encryption(id),
    // });
    let data = JSON.stringify({
      state_id: id,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/getCityList",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        var data = response.data.data;
        setGetCity(data);
        return response.data.data;
      })
      .catch((error) => {
        return error;
      });
  };
  const register = async () => {
    console.log("======> registered");
    let data = JSON.stringify({
      city: cityId,
      confirmpassword: confirmPasword,
      device_type: "M",
      email: email,
      mobile: otp,
      name: name,
      otp: verif,
      password: password,
      state: stateId,
      username: userName,
    });

    console.log("=========>", data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/register",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        var data = response.data.message;
        console.log("==========>1", data);
        setRegisterResponse(data);
      })
      .catch((error) => {
        console.log("=========>error", error);
        return error;
      });
  };
  const verifyOtp = async () => {
    //   let data = JSON.stringify({
    //     "mobile":helper.Encryption(otp),
    //     "otp":helper.Encryption(verif)
    // });
    let data = JSON.stringify({
      mobile: otp,
      otp: verif,
    });
    // "mobile":otp,
    // "otp":verif
    // });
    console.log("======>1", data);
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://dpboss.deals/api/auth/CheckValidOtp",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios
      .request(config)
      .then((response) => {
        if (
          response.data.message === "OTP verify successfully" &&
          verif !== ""
        ) {
          setVerifyOtpv(true);
        } else {
          //alert("enter valid otp");
        }
      })
      .catch((error) => {
        return error;
      });
  };
  const getState = async (e) => {};
  const navigate = useNavigate();

  // const navigateToHome = () => {
  //   navigate("/");
  //   props.onHide();
  // };

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

  const emailCheck = () => {
    !checkUser ? alert("Email Available") : setEmailExist(false);
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>REGISTER</Modal.Header>
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
                  href="httpss://wa.link/b30dl8"
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
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
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
                            placeholder="Username"
                            type="text"
                            onChange={(e) => handleChangeUserName(e)}
                            onBlur={handleCheckUserName}
                          />
                          {apiCallUser &&
                          userName === "" &&
                          userNameCheck !== "User Name available" ? (
                            <span className="error">
                              User name not available.
                            </span>
                          ) : (
                            <span className="error"></span>
                          )}
                        </div>
                        <div className="clrBoth" />
                      </div>
                      <div className="col-6">
                        <div className="username-input">
                          <input
                            id="email"
                            placeholder="Email"
                            type="email"
                            onChange={handleChangeEmail}
                            onBlur={handleCheckUserExist}
                            className={isValid ? "" : "invalid"}
                          />

                          {!isValid && (
                            <span className="error">
                              Please enter a valid email.
                            </span>
                          )}

                          {/* {apiCallEmail && userMessage === "" && isValid ? (
                            <span className="error">
                              {" "}
                              Please enter a valid email.
                            </span>
                          ) : apiCallEmail &&
                            userMessage === "" &&
                            userMessage !== "Email available" ? (
                            <span className="error">Email already exists.</span>
                          ) : (
                            <></>
                          )} */}
                          {apiCallEmail &&
                          userMessage === "Email already exists" &&
                          userMessage !== "Email already exists" ? (
                            <span className="error">Email already exists.</span>
                          ) : (
                            <></>
                          )}
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
                            max="10"
                            min="10"
                            placeholder="  Phone No"
                            type="number"
                            className="mobile1"
                            value={otp}
                            onChange={(e) => handleMobile(e)}
                            // onBlur={handleCheckUserMobile}
                          />
                          {
                            //{apiCallUser && userName === "" && userNameCheck !== "User Name available"

                            validMobile ? (
                              <span className="error">
                                Enter a valid mobile
                              </span>
                            ) : (mobileCheck &&
                                userMobileCheck === "" &&
                                userMobileCheck !==
                                  "Mobile number available") ||
                              userMobileCheck === "Mobile already exists" ? (
                              <span className="error">
                                Mobile already exists
                              </span>
                            ) : (
                              <span className="error"></span>
                            )
                          }
                          {userMobileCheck === "Mobile already exists" ? (
                            <></>
                          ) : (
                            <button
                              onClick={SendOtp}
                              style={{
                                cursor: "pointer",
                                display: otp.length === 10 ? "block" : "none",
                              }}
                              className="btn btn-primary otpbtn"
                            >
                              Resend OTP
                            </button>
                          )}
                        </div>
                        <div className="clrBoth" />
                      </div>
                      {userMobileCheck === "Mobile already exists" ? (
                        <></>
                      ) : (
                        <div className="col-6">
                          <div
                            className="username-input otp1"
                            style={{
                              display: otp.length === 10 ? "block" : "none",
                            }}
                          >
                            <input
                              id="email"
                              placeholder="OTP"
                              max="10"
                              min="10"
                              type="text"
                              onChange={(e) => {
                                handleOtp(e);
                              }}
                              onBlur={() => {
                                verifyOtp();
                              }}
                            />
                            {verifyOtpv ? (
                              <></>
                            ) : (
                              <span className="error">Enter a valid OTP</span>
                            )}
                          </div>
                          <div className="clrBoth" />
                        </div>
                      )}
                    </div>
                    <div className="row" style={{ marginTop: "1.5rem" }}>
                      <div className="col-6">
                        <div
                          className="username-input"
                          onClick={(e) => {
                            getState(e);
                          }}
                        >
                          <select
                            className="form-select"
                            style={{ "border-bottom": "0px !important" }}
                            onChange={(e) => handleChange(e)}
                          >
                            <option selected value="null">
                              {" "}
                              Select State{" "}
                            </option>
                            {dataArray?.map((review) => {
                              return (
                                <option
                                  value={decryptData(
                                    helper.Decryption(review.id)
                                  )}
                                >
                                  {decryptData(helper.Decryption(review.name))}
                                </option>
                              );
                            })}
                          </select>
                        </div>
                        <div className="clrBoth" />
                      </div>
                      <div className="col-6">
                        <div className="username-input">
                          <select
                            className="form-select"
                            formcontrolname="city"
                            onChange={(e) => {
                              setCityId(e.target.value);
                            }}
                          >
                            <option selected value="null">
                              Select city
                            </option>
                            {getCity?.map((review) => {
                              return (
                                <option
                                  value={decryptData(
                                    helper.Decryption(review.id)
                                  )}
                                >
                                  {decryptData(helper.Decryption(review.city))}
                                </option>
                              );
                            })}
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
                            onChange={(e) => {
                              setPassword(e.target.value);
                            }}
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
                            onChange={(e) => {
                              setConfirmPassword(e.target.value);
                            }}
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
                            checked={click}
                            onClick={() => {
                              // if(password === confirmPasword &&
                              //   password != "" &&
                              //   confirmPasword != "" && click ){
                              //   setClick(false)
                              // }else{
                              //   setClick(true)
                              // }
                              password === confirmPasword &&
                              password != "" &&
                              confirmPasword != ""
                                ? setClick(true)
                                : alert("enter a valid password");
                            }}
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
                    {notValidate ? (
                      <span className="error3">check all the fields</span>
                    ) : (
                      <span className="error"></span>
                    )}
                    <div className="loBTm">
                      <div onClick={navigateToHome} className="logbk">
                        <button className="log-reg-btn"> &lt; Back </button>
                      </div>
                      <div className="logreg">
                        <button
                          onClick={() => {
                            console.log("=========>1", verifyOtpv);
                            console.log("=========>2", emailVerify);
                            console.log("=========>3", userNameVerify);
                            console.log("=========>4", mobileVerify);
                            console.log("=========>5", click);

                            if (
                              verifyOtpv &&
                              emailVerify &&
                              userNameVerify &&
                              mobileVerify &&
                              click
                            ) {
                              setNotvalidate(false);
                              register();
                            } else {
                              setNotvalidate(true);
                            }
                          }}
                          className="log-reg-btn"
                        >
                          Register &gt;
                        </button>
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
