import React, { useState } from "react";
import "../css/header.css";
import Logo from "../images/logo.png";
import Login from "./Login";
import SignUp from "./SignUp";

function Header() {
  const [modalShowLogin, setModalShowLogin] = useState(false);
  const [modalShowSignUp, setModalShowSignUp] = useState(false);
  const [isNotLogin, setIsNotLogin] = useState(true);

  return (
    <div>
      <header id="header" className="fixed-top d-flex align-items-center">
        {isNotLogin?<div className="container d-flex align-items-center innrhd">
          <div className="logo me-auto">
            <a href="index.html" alt="">
              <img src={Logo} alt=""/>
            </a>
          </div>
          <a
            onClick={() => setModalShowLogin(true)}
            href=""
            className="get-started-btn lloginBTn"
          >
            Login
          </a>
          <Login
            show={modalShowLogin}
            onHide={() => setModalShowLogin(false)}
            close={() => setModalShowLogin(false)}
          />
          <a
            onClick={() => setModalShowSignUp(true)}
            href="#"
            className="get-started-btn "
          >
            Sign Up
          </a>
          <SignUp
            show={modalShowSignUp}
            onHide={() => setModalShowSignUp(false)}
          />
        </div>:
        <div className="container d-flex align-items-center innrhd">
          <div className="logo me-auto">
            <a href="index.html">
              <img src={Logo} />
            </a>
          </div>
          <a
            onClick={() => setModalShowLogin(true)}
            href="#"
            className="get-started-btn lloginBTn"
          >
            Deposite
          </a>
          <Login
            show={modalShowLogin}
            onHide={() => setModalShowLogin(false)}
            close={() => setModalShowLogin(false)}
          />
          <a
            onClick={() => setModalShowSignUp(true)}
            href="#"
            className="get-started-btn "
          >
            Withdrawl
          </a>
          <SignUp
            show={modalShowSignUp}
            onHide={() => setModalShowSignUp(false)}
          />
        </div>}
      </header>
    </div>
  );
}

export default Header;
