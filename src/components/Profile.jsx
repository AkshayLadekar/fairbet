import Header from "./Header";
import Footer from "./Footer";
import ProfileFooter from "./ProfileFooter";
import React, { useState } from "react";
import "../css/profile.css";
import Nf10 from "../images/nf10.png";
import Nf1 from "../images/nf1.png";
import Nf3 from "../images/nf3.png";
import Nf4 from "../images/nf4.png";
import Nf5 from "../images/nf5.png";
import Nf6 from "../images/nf6.png";
import Nf7 from "../images/nf7.png";
import Logo from "../images/logo.png";
import UserImg from "../images/user_default.png";
import Whatsapp from "../images/whatsapp-green.png";
import Telegram from "../images/telegram-blue.png";
import Deposite from '../components/Deposite'

function Profile() {
  const [showModal, setShowModal] = useState(false);
  const [modalShowSignUp, setModalShowSignUp] = useState(false);
  return (
    <div>
      <Header />

      <div>
        <div className="top_menu">
          <ul>
            <li>
              <a href="/dashboard">Exchange</a>
            </li>
            <li>
              <a href="/casino/live-casino">Live casino</a>
            </li>
            <li>
              <a href="/satta-matka">Satta Matka</a>
            </li>
          </ul>
        </div>
        <div className="profile-detail dw" id="profilinfo">
          <div className="acc-table">
            <table className="accountDetail">
              <tbody>
                <tr>
                  <td>My Account</td>
                  <td className="txt-right-table">X</td>
                </tr>
                <tr>
                  <td className="cash-bal">Cash Balance</td>
                  <td className="txt-right-table"> ₹ 6,425.80/- </td>
                </tr>
                <tr>
                  <td>Chips in Play</td>
                  <td className="txt-right-table"> 31/- </td>
                </tr>
                <tr className="bor-px">
                  <td>
                    <p className="tdkyc">KYC</p>
                    <span className="kycStatus kycApproved"> Approved </span>
                    <a href="/kyc" />
                  </td>
                  <td className="txt-right-table">
                    <span
                      className="deposit_section whitdepo"
                      style={{ cursor: "pointer" }}
                      onClick={()=>{setShowModal(true)}}
                    >
                      <img src={Nf10} width={20} className="with" /> Withdraw{" "}
                    </span>
                  </td>
                </tr>
                <Deposite show={showModal}  onHide={()=>{setShowModal(false)}}></Deposite>
              </tbody>
            </table>
          </div>
          <div className="white-form-dv">
            <h1 className="useren">Khemaldemo</h1>
            <p className="userLogindetail">Last login 44:1852</p>
            <div style={{ clear: "both" }} />
            <ul className="list-unstyled profile-list white-list unstylebord-none">
              <li className="colorchangebg smbet-his">
                <a href="/m/sm-history">
                  <img src={Nf1} /> <span>SM Bet History</span>
                </a>
              </li>
              <li className="colorchangebg">
                <a href="/my-bets">
                  <img src={Nf3} />
                  <span> Bet History</span>
                </a>
              </li>
              <li className="colorchangebg">
                <a href="/account-statement">
                  <img src={Nf4} />
                  <span> Account Statement</span>
                </a>
              </li>
              <li className="colorchangebg">
                <a href="/dwrequest-statement">
                  <img src={Nf5} />
                  <span>Withdraw Requests</span>
                </a>
              </li>
              <li className="colorchangebg">
                <a href="/support-request">
                  <img src={Nf6} /> <span> Feedback</span>
                </a>
              </li>
              <li className="colorchangebg">
                <a href>
                  <img src={Nf7} />
                  <span> Change Password</span>
                </a>
              </li>
            </ul>
            <ul className="social-media socialwhite">
              <li className="colorchangebg_2">
                <a target="_blank" href="#">
                  <img alt="whatsapp" src={Whatsapp} />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li className="colorchangebg_2">
                <a target="_blank" href="#">
                  <img alt="telegram" src={Telegram} />
                  <span>Telegram</span>
                </a>
              </li>
            </ul>
            <div className="logou-bx text-center">
              <button className="btn btn-red brocure" type="button">
                {" "}
                Logout
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProfileFooter />
    </div>
  );
}

export default Profile;
