import React, {useState} from "react";
import Envolope from "../images/envolop.png";
import Whatsapp from "../images/whatsapp-green.png";
import Telegram from "../images/telegram-blue.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Satta from "../images/satta_m.svg";
import Menus from "../images/mnu.png";
import Home from "../images/home1.png";
import Casino from "../images/livecasino (1).svg";
import Slots from "../images/slots.png";
import "../css/footer.css";
import Login from "./Login";
import {Routes, Route, useNavigate} from 'react-router-dom';

function Footer() {

  const [modalShow1, setModalShow1] = useState(false);

  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate('/menu');
  };

  

  const navigateToHome = () => {
    navigate('/');
  };

  const navigateToCasino = () => {
    navigate('/casino');
  };

  const navigateToSlots = () => {
    navigate('/slots');
  };

  return (
    <div>
      <section id="pricing" className="pricing section-bg btmfootere">
        <footer>
          <div className="mb-footer clearfix">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <h3>FAIRBETS</h3>
                <p>
                  This website is operated by Three Aces Curaçao N.V.,
                  registered in Curaçao under the number 155000, with the
                  address at Heelsumstraat 51 Curaçao, authorized by General
                  Governor of Curaçao through Antillephone N.V. under the gaming
                  license number 8048-JAZ2020-078 which operates this website
                </p>
                <p>
                  The transactions are processed by Three Aces Digital Ltd
                  registered with the number 12965655, with head office at Kemp
                  House 160 City Road, London, United Kingdom.
                </p>
                <p>
                  For the purpose of processing payments via Paysafe Group
                  including but not limited to Neteller and Skrill, the
                  transaction processing entity shall be Three Aces Curaçao
                  N.V., registered in Curaçao under the number 155000, with the
                  address at Heelsumstraat 51 Curaçao
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-6 social-footer">
                <h5>CONTACT FAIRBETS</h5>
                <p style={{ display: "block", "line-height": "22px" }}>
                  <a href="#">
                    <img
                      alt="envelope"
                      src={Envolope}
                      style={{ width: "28px" }}
                    />{" "}
                    support@fairbets.co
                  </a>
                </p>
                {/**/}
                <p
                  style={{
                    display: "inline-block",
                    "margin-left": "0px",
                    "line-height": "22px",
                  }}
                >
                  <a target="_blank" href="#">
                    <img
                      alt="whatsapp"
                      src={Whatsapp}
                      style={{ height: "28px" }}
                    />{" "}
                    WhatsApp
                  </a>
                </p>
                {/**/}
                <p
                  style={{
                    display: "inline-block",
                    "margin-left": "0px",
                    "line-height": "22px",
                  }}
                >
                  <a target="_blank" href="#">
                    <img
                      alt="telegram"
                      src={Telegram}
                      style={{ height: "28px" }}
                    />{" "}
                    Telegram
                  </a>
                </p>
                {/**/}
                <p
                  style={{
                    display: "inline-block",
                    "margin-left": "0px",
                    "line-height": "22px",
                  }}
                >
                  <a target="_blank" href="#">
                    <img
                      alt="Twitter"
                      src={Twitter}
                      style={{ height: "28px" }}
                    />{" "}
                    Twitter
                  </a>
                </p>
                {/**/}
                <p
                  style={{
                    display: "inline-block",
                    "margin-left": "0px",
                    "line-height": "22px",
                  }}
                >
                  <a target="_blank" href="#">
                    <img
                      alt="Instagram"
                      src={Instagram}
                      style={{ height: "28px" }}
                    />{" "}
                    Instagram
                  </a>
                </p>
              </div>
              <div className="col-lg-3 col-md-3 col-6">
                <h5>RULES AND REGULATIONS</h5>
                <ul className="rulr">
                  <li>
                    <a href="#">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="#">AML Policy</a>
                  </li>
                  <li>
                    <a href="#">Responsible Gaming</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms and Conditions NetEnt</a>
                  </li>
                </ul>
                <div
                  data-apg-image-size={128}
                  data-apg-image-type="basic-small"
                  data-apg-seal-id="95481486-2e31-454b-bc94-b0c32624a772"
                  id="apg-95481486-2e31-454b-bc94-b0c32624a772"
                >
                  <div
                    style={{
                      display: "block",
                      position: "relative",
                      overflow: "hidden",
                      "max-width": "128px",
                      "min-width": "32px",
                      "background-image":
                        "url(https://95481486-2e31-454b-bc94-b0c32624a772.snippet.antillephone.com/54f396e0-b046-49b1-9cb3-0c69281d7ea9-beacon.png)",
                    }}
                  >
                    <a
                      target="_blank"
                      rel="nonoopener"
                      href="https://validator.antillephone.com/validate?domain=fairbets.co&seal_id=2f958e3b07ab0a9d02b9c189f30607a36103cd0282df3348228cb23cdd67242ccc56b77e798af4b09537dad9608d732d&stamp=5ab0c8dbf295ac4889c1f7448a327883"
                    >
                      <img
                        alt
                        style={{ width: "100%", height: "auto" }}
                        src="https://95481486-2e31-454b-bc94-b0c32624a772.snippet.antillephone.com/sealassets/5ab0c8dbf295ac4889c1f7448a327883-fairbets.co-2f958e3b07ab0a9d02b9c189f30607a36103cd0282df3348228cb23cdd67242ccc56b77e798af4b09537dad9608d732d-c2VhbC5wbmc%3D?status=valid"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-6" />
            </div>
          </div>
        </footer>
      </section>
      <div className="MobileFooter_mobileFooter">
        <div onClick={() => setModalShow1(true)} role="button" className="MobileFooter_footerItem ">
          <a
            className="MobileFooter_itemContent"
            data-hook="mobile-footerpromotions"
            data-pushstate="enabled"
            role="button"
            // href="/login"
          >
            {/**/}
            <img alt="Satta Matka" className="MobileFooter_icon" src={Satta} />
            {/**/}
            <span className="MobileFooter_label">Satta Matka</span>
          </a>
        </div>
        <Login show={modalShow1} onHide={() => setModalShow1(false)} />
        <div onClick={navigateToMenu} role="button" className="MobileFooter_footerItem ">
          <a
            className="MobileFooter_itemContent"
            data-hook="mobile-footerpromotions"
            data-pushstate="enabled"
            role="button"
            // href="/menu"
          >
            {/**/}
            <img alt="Satta Matka" className="MobileFooter_icon" src={Menus} />
            {/**/}
            <span className="MobileFooter_label">Menu</span>
          </a>
        </div>
        <div onClick={navigateToHome} role="button" className="MobileFooter_footerItem active">
          <a
            className="MobileFooter_itemContent"
            data-hook="mobile-footerlivecasino"
            data-pushstate="enabled"
            role="button"
            // href="/"
          >
            <img alt="Home" className="MobileFooter_icon" src={Home} />
            <span className="MobileFooter_label">Home</span>
          </a>
        </div>
        <div onClick={navigateToCasino} role="button" className="MobileFooter_footerItem ">
          <a
            className="MobileFooter_itemContent"
            data-hook="mobile-footerexchange"
            data-pushstate="enabled"
            role="button"
            // href="/casino"
          >
            {/**/}
            <img
              alt="Live
  Casino"
              className="MobileFooter_icon"
              src={Casino}
            />
            {/**/}
            <span className="MobileFooter_label">Live Casino</span>
          </a>
        </div>
        <div onClick={navigateToSlots} role="button" className="MobileFooter_footerItem ">
          <a
            className="MobileFooter_itemContent"
            data-hook="mobile-footerpromotions"
            data-pushstate="enabled"
            role="button"
          >
            {/**/}
            <img alt="Slots" className="MobileFooter_icon" src={Slots} />
            {/**/}
            <span className="MobileFooter_label">Slots</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
