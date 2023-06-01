import React, { useState } from "react";
import Logo from "../images/logo.png";
import "../css/header1.css";
import Login from "./Login";
import SignUp from "./SignUp";
import upi from "../images/images/upi1318.png";
import "../css/payment.css";
import upi15 from "../images/images/15.png";
import paytm from "../images/images/16 (1).png";
import gpay from "../images/images/17.png";
import phonepay from "../images/images/18.png";
import Modal from "react-bootstrap/Modal";
import a2z from "../images/images/a2z-upi1.png";
import icons from "../images/images/ab-upi1.png";
import deposit from "../images/upload.png";
import withdraw from "../images/download.png";
import next from "../images/next-2.png";
import iconDeposit from "../images/bank-2.png";
import userIcon from "../images/user-interface-2.png";
import { Routes, Route, useNavigate } from "react-router-dom";

function Header1(props) {
  const [modalShowLogin, setModalShowLogin] = useState(false);
  const [modalShowSignUp, setModalShowSignUp] = useState(false);
  const [isNotLogin, setIsNotLogin] = useState(false);
  const [showDepositeComponent, setshowDepositeComponent] = useState(true);
  const [showUpi, setShowUpi] = useState(false);
  const [showDeposite, setShowDeposite] = useState(false);
  const [showUpiButton, setShowUpiButton] = useState(true);
  const [showUpiIcons, setShowUpiIcons] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  const navigate = useNavigate();

  const navigateToProfile = () => {
    navigate("/profile");
  };


  return (
    <div>
      <header id="header" className="fixed-top header-inner-pages">
        <div className="tpDV">
          <p>
            <a href="/dashboard" className="tpNv" style={{
                borderBottom:
                  window.location.pathname === "/dashboard"
                    ? "2px solid #876ac5"
                    : "none",
              }}>
              Exchange
            </a>
            <a
              href="/casino"
              className="tpNv"
              style={{
                borderBottom:
                  window.location.pathname === "/casino"
                    ? "2px solid #876ac5"
                    : "none",
              }}
            >
              Live casino
            </a>
            <a
              href="/satta"
              className="tpNv"
              style={{
                borderBottom:
                  window.location.pathname === "/satta"
                    ? "2px solid #876ac5"
                    : "none",
              }}
            >
              Satta Matka
            </a>
          </p>
        </div>
        {isNotLogin ? (
          <div className="container align-items-center justify-content-between">
            <div className="clrBoth" />
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-3 icon-box">
                    <div className="icon">
                      <img className="wlogo" src={Logo} />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9 col-9 icon-box log-Main">
                    <p>
                      <a
                        href="#"
                        className="log"
                        onClick={() => setModalShowLogin(true)}
                      >
                        Log In{" "}
                      </a>{" "}
                      <Login
                        show={modalShowLogin}
                        onHide={() => setModalShowLogin(false)}
                        close={() => setModalShowLogin(false)}
                      />
                      <a
                        href="#"
                        className="sign"
                        onClick={() => setModalShowSignUp(true)}
                      >
                        Sign Up{" "}
                      </a>
                      <SignUp
                        show={modalShowSignUp}
                        onHide={() => setModalShowSignUp(false)}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="container d-flex align-items-center innrhd">
            <div className="logo me-auto">
              <a href="/">
                <img src={Logo} />
              </a>
            </div>

            <a
              onClick={() => setShowDeposite(true)}
              href="#"
              className="get-started-btn lloginBTn"
            >
              <img className="depositbtn" src={iconDeposit} />
              Deposit
            </a>

            <Modal
              //{...props}
              show={showDeposite}
              onHide={() => {
                setShowDeposite(false);
                setShowUpi(false);
                setShowPayment(false);
                setshowDepositeComponent(true);
                setShowUpiIcons(false);
                setShowUpiButton(true);
              }}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header className="clsbtn" closeButton>
                DEPOSIT / WITHDRAW
              </Modal.Header>
              <Modal.Body>
                <div
                  className="modal-body payMain ouerMainDv"
                  style={{ padding: "0px" }}
                >
                  <ul
                    className="nav nav-tabs justify-content-center"
                    role="tablist"
                  >
                    <li className="active">
                      <a
                        className="active show"
                        data-toggle="tab"
                        href="#deposit"
                        role="tab"
                        aria-selected="true"
                      >
                        <img className="payment" src={deposit} width="17%" />
                        <span
                          className="payment1"
                          onClick={() => {
                            setshowDepositeComponent(true);
                          }}
                        >
                          Deposit
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className
                        data-toggle="tab"
                        href="#withdraw"
                        role="tab"
                        aria-selected="false"
                      >
                        <img className="payment" src={withdraw} width="17%" />
                        <span
                          className="payment1"
                          onClick={() => {
                            setshowDepositeComponent(false);
                          }}
                        >
                          Withdraw
                        </span>
                      </a>
                    </li>
                  </ul>
                  {showDepositeComponent ? (
                    <div className="content-tabs">
                      {" "}
                      <div className="tab-content tab-content-2">
                        <div
                          className="tab-pane active show"
                          id="deposit"
                          role="tabpanel"
                        >
                          <ul
                            className="type nav nav-tabs justify-content-center auto-nner"
                            role="tablist"
                          >
                            <li className="active">
                              <a
                                className="active show"
                                data-toggle="tab"
                                href
                                role="tab"
                              >
                                <span className="payment1">Automatic</span>
                              </a>
                            </li>
                            <li style={{ display: "none" }}>
                              <a className data-toggle="tab" href role="tab">
                                <span>Instant</span>
                              </a>
                            </li>
                          </ul>
                          <div
                            className="tab-content-tsp tab-table-data tpmar"
                            id="automatic"
                            style={{}}
                          >
                            {showUpiButton ? (
                              <ul
                                className="paymentlist"
                                onClick={() => {
                                  setShowUpiButton(false);
                                  setShowUpi(true);
                                }}
                                style={{}}
                              >
                                <li>
                                  <a href>
                                    <img
                                      className="img-width"
                                      alt="UPI"
                                      src={upi}
                                    />{" "}
                                    <img className="img-width1" src={next} />
                                  </a>
                                </li>
                              </ul>
                            ) : (
                              <></>
                            )}
                            {/*--------------  UPI amount  ------------------*/}
                            {/* {showUpi?<Upi prop={true}></Upi>:<></>} */}
                            {showUpi ? (
                              <div>
                                <ul className="paymentlist imgsize">
                                  <li>
                                    <img
                                      onClick={() => {
                                        setShowPayment(true);
                                        setShowUpi(false);
                                      }}
                                      className="ist-img"
                                      src={a2z}
                                    />
                                  </li>
                                  <li>
                                    <img
                                      onClick={() => {
                                        setShowUpiIcons(true);
                                        setShowUpi(false);
                                        setShowPayment(true);
                                      }}
                                      className="ist-img"
                                      src={icons}
                                    />
                                  </li>
                                </ul>
                                <div className="clrBoth" />
                                <div className="btmMain">
                                  <a
                                    className="btn-bk mt-2 ml-2"
                                    href
                                    onClick={() => {
                                      setShowUpiButton(true);
                                      setShowUpi(false);
                                    }}
                                  >
                                    Back
                                  </a>
                                  <div className="clrBoth" />
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}
                            {/*--------------  #UPI amount  ------------------*/}
                            {/*--------------  withdrw amount  ------------------*/}
                            {showPayment ? (
                              <div>
                                <div className="pdlft0">
                                  <div className="group">
                                    <input
                                      className="form-control-amt"
                                      id="Amount"
                                      placeholder="Amount"
                                      type="number"
                                    />
                                    <small className="min-depo">
                                      {" "}
                                      You can deposit minimum 300.
                                    </small>
                                  </div>
                                  <div className="amtmain amtd justify-content-center">
                                    <span className="btn btn-primary am">
                                      300
                                    </span>
                                    <span className="btn btn-primary am">
                                      500
                                    </span>
                                    <span className="btn btn-primary am">
                                      1000
                                    </span>
                                    <span className="btn btn-primary am">
                                      2000
                                    </span>
                                    <span className="btn btn-primary am">
                                      5000
                                    </span>
                                  </div>

                                  {showUpiIcons ? (
                                    <div>
                                      <div className="innerPay InnerSub">
                                        <div className="row-cust justify-content-center msbt">
                                          <label className="col-2 potion">
                                            <img src={gpay} />
                                          </label>
                                          <label className="col-2 potion">
                                            <img src={phonepay} />
                                          </label>
                                          <label className="col-2 potion">
                                            <img src={paytm} />
                                          </label>
                                          <label className="col-2 potion">
                                            <img src={upi15} />
                                          </label>
                                        </div>
                                      </div>
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div className="btmMain-2">
                                  <a
                                    className="btn-bk mt-2 ml-2"
                                    onClick={() => {
                                      setShowPayment(false);
                                      setShowUpiIcons(false);
                                      setShowUpiButton(true);
                                    }}
                                  >
                                    Back
                                  </a>
                                  <button
                                    className="sbBtn"
                                    id="gtm-login_button"
                                    type="submit"
                                  >
                                    {" "}
                                    Submit{" "}
                                  </button>
                                  <div className="clrBoth" />
                                </div>
                              </div>
                            ) : (
                              <></>
                            )}
                            {/*-------------- #withdrw amount  ------------------*/}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <div className="tab-pane " id="withdraw" role="tabpanel">
                        <div className="tab-content-tsp tab-table-data tabpne-with tpmar">
                          <div className="withdraw_div">
                            <form name="withdrawal_form_fill">
                              <div className="note">
                                <strong>Note: </strong> To change the withdrawal
                                account details please contact support.{" "}
                              </div>
                              <div className="form-group-cust">
                                <label>Withdrawal Amount</label>
                                <input
                                  className="form-control"
                                  formcontrolname="WAmount"
                                  type="number"
                                />
                              </div>
                              <div className="form-group-cust">
                                <label htmlFor="account">
                                  Account Holder Name
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group-cust">
                                <label htmlFor="account">Bank Name</label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group-cust">
                                <label htmlFor="account">
                                  Bank Account Number
                                </label>
                                <input className="form-control" type="text" />
                              </div>
                              <div className="form-group-cust">
                                <label htmlFor="account">IFSC Code</label>
                                <input className="form-control" type="text" />
                              </div>
                              <button
                                className="submitBtn"
                                style={{ width: "auto", border: 0 }}
                                type="submit"
                              >
                                {" "}
                                Submit{" "}
                              </button>
                              <a
                                className="submitBtn"
                                href="/m/dwrequest-statement"
                                style={{ float: "right" }}
                              >
                                Cancel Withdraw Requests
                              </a>
                            </form>
                            <p className="point">
                              {" "}
                              1)If withdrawal accounts of 2 or more ID are same
                              both IDs will be blocked{" "}
                            </p>
                            <p className="point">
                              {" "}
                              2)If two IDs have same IP both IDs will be blocked{" "}
                            </p>
                            <p className="point">
                              {" "}
                              3)Bonus should be wagered @5x before you can
                              withdraw it{" "}
                            </p>
                            <p className="point">
                              {" "}
                              4)If betting pattern of 2 IDs is same both will be
                              blocked{" "}
                            </p>
                            <p className="point">
                              {" "}
                              5)Do not put withdrawal request without depositing
                              such request Will be categorised as suspicious
                              activities{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </Modal.Body>
            </Modal>

            <a
              onClick={() => navigateToProfile()}
              href="#"
              className="get-started-btn "
            >
              <img className="userbtn" src={userIcon} />
              0.00
            </a>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header1;
