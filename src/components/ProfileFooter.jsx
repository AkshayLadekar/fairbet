import React, { useState } from "react";
import Envolope from "../images/envolop.png";
import Whatsapp from "../images/whatsapp-green.png";
import Telegram from "../images/telegram-blue.png";
import Twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Satta from "../images/satta_m.svg";
import Menus from "../images/mnu.png";
import Home from "../images/homewhite.png";
import Casino from "../images/livecasino (1).svg";
import Slots from "../images/slots.png";
import "../css/footer.css";
import Login from "./Login";
import { Routes, Route, useNavigate } from "react-router-dom";

function ProfileFooter() {
  const [modalShow1, setModalShow1] = useState(false);

  const navigate = useNavigate();

  const navigateToMenu = () => {
    navigate("/menu");
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToCasino = () => {
    navigate("/casino");
  };

  const navigateToSlots = () => {
    navigate("/slots");
  };

  return (
    <div className="MobileFooter_mobileFooter">
      <div
        onClick={() => setModalShow1(true)}
        role="button"
        className="MobileFooter_footerItem "
      >
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
      <div
        onClick={navigateToMenu}
        role="button"
        className="MobileFooter_footerItem "
      >
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
      <div
        onClick={navigateToHome}
        role="button"
        className="MobileFooter_footerItem active"
      >
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
      <div
        onClick={navigateToCasino}
        role="button"
        className="MobileFooter_footerItem "
      >
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
      <div
        onClick={navigateToSlots}
        role="button"
        className="MobileFooter_footerItem "
      >
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
  );
}

export default ProfileFooter;
