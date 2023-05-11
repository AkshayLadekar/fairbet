import React, { useState } from "react";
import "../css/menu.css";
import Header from "./Header";
import FooterSubMenu from "./FooterSubMenu";
import Homemenu from "../images/home.svg";
import Satta from "../images/poker-cards-4.png";
import Casino from "../images/casino.svg";
import LiveCasino from "../images/livecasino.svg";
import Slots from "../images/slots.svg";
import Virtuals from "../images/virtuals.svg";
import Blackjack from "../images/blackjack.svg";
import Roulette from "../images/roulette.svg";
import Andarbar from "../images/andar-bahar.svg";
import Dragontiger from "../images/dragon-tiger.svg";
import Baccarat from "../images/baccaret.svg";
import Poker from "../images/poker.svg";
import Ezugi from "../images/ezugi-logo.png";
import Evo from "../images/evolution-logoo.png";
import Feed from "../images/feedback.png";
import Support from "../images/support.png";
import Support1 from "./Support";
import Whatsapp from "../images/whatsapp-green.png";
import Telegram from "../images/telegram-blue.png";

import { Navigate, useNavigate } from "react-router-dom";

function Menu() {
  const [modalFeedback, setModalFeedback] = useState(false);

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  const navigateToSatta = () => {
    navigate("/satta");
  };

  const navigateToEzugi = () => {
    navigate("/ezugi");
  };

  const navigateToEvo = () => {
    navigate("/evolution");
  };

  const navigateToFeed = () => {
    navigate("/feedback");
  };

  return (
    <>
      <Header />
      <div _ngcontent-c1 className="ovl" id="menuHome" style={{}}>
        <div _ngcontent-c1 className="wrap clearfix">
          <div _ngcontent-c1>
            <h3 _ngcontent-c1 className="grad">
              QUICK ACCESS
            </h3>
            <ul _ngcontent-c1>
              <li _ngcontent-c1>
                <a onClick={navigateToHome} _ngcontent-c1 href="#">
                  <img _ngcontent-c1 alt="home" src={Homemenu} />
                  <span _ngcontent-c1>Home</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a onClick={navigateToSatta} _ngcontent-c1 href="#">
                  <img _ngcontent-c1 alt="Satta Matka" src={Satta} />
                  <span _ngcontent-c1>Satta Matka</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a onClick={navigateToEzugi} _ngcontent-c1 href="#">
                  <img _ngcontent-c1 alt="Ezugi" src={Ezugi} />
                  <span _ngcontent-c1>Ezugi</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a onClick={navigateToEvo} _ngcontent-c1 href="#">
                  <img _ngcontent-c1 alt="Evolution" src={Evo} />
                  <span _ngcontent-c1>Evolution</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a onClick={navigateToFeed} _ngcontent-c1 href="#">
                  <img _ngcontent-c1 alt="Feedback" src={Feed} />
                  <span _ngcontent-c1>Feedback</span>
                </a>
              </li>
              <Support1
                show={modalFeedback}
                onHide={() => setModalFeedback(false)}
              />
              <li _ngcontent-c1>
                <a
                  onClick={() => setModalFeedback(true)}
                  _ngcontent-c1
                  href="#"
                >
                  <img _ngcontent-c1 alt="Support" src={Support} />
                  <span _ngcontent-c1>Support</span>
                </a>
              </li>
            </ul>
          </div>
          <div _ngcontent-c1 className="Grid__divider___qc2Np" />
          <div _ngcontent-c1 className="Grid__divider___qc2Np" />
          <div _ngcontent-c1>
            <h3 _ngcontent-c1 className="grad">
              CASINO
            </h3>
            <ul _ngcontent-c1>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/top-games">
                  <img _ngcontent-c1 alt="Casino" src={Casino} />
                  <span _ngcontent-c1>Top Games</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/live-casino">
                  <img
                    _ngcontent-c1
                    alt="Live
        Casino"
                    src={LiveCasino}
                  />
                  <span _ngcontent-c1>Live Casino</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/slots">
                  <img _ngcontent-c1 alt="Slots" src={Slots} />
                  <span _ngcontent-c1>Slots</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/virtual-games">
                  <img _ngcontent-c1 alt="Virtuals" src={Virtuals} />
                  <span _ngcontent-c1>Virtuals</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/blackjack">
                  <img _ngcontent-c1 alt="Virtuals" src={Blackjack} />
                  <span _ngcontent-c1>Blackjack</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/roulette">
                  <img _ngcontent-c1 alt="Virtuals" src={Roulette} />
                  <span _ngcontent-c1>Roulette</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/andar-bahar">
                  <img _ngcontent-c1 alt="Virtuals" src={Andarbar} />
                  <span _ngcontent-c1>Andar Bahar</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/dragon-tiger">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Dragontiger}
                    style={{ width: "29px" }}
                  />
                  <span _ngcontent-c1>Dragon Tiger</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/baccarat">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Baccarat}
                    style={{ width: "29px" }}
                  />
                  <span _ngcontent-c1>Baccarat</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/poker">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Poker}
                    style={{ width: "29px" }}
                  />
                  <span _ngcontent-c1>Poker</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div _ngcontent-c5 className="row">
          <div _ngcontent-c5 className="col-lg-6 col-md-6 col-6 swt">
            {/**/}
            <p _ngcontent-c5>
              <a _ngcontent-c5 target="_blank" href="https://wa.link/37tgon">
                <img
                  _ngcontent-c5
                  alt="whatsapp"
                  src={Whatsapp}
                  style={{ height: "32px" }}
                />
                <span _ngcontent-c5 className="color: #fff;font-size: 12px;">
                  WhatsApp
                </span>
              </a>
            </p>
          </div>
          <div _ngcontent-c5 className="col-lg-6 col-md-6 col-6 swt">
            {/**/}
            <p _ngcontent-c5>
              <a _ngcontent-c5 target="_blank" href="https://t.me/Fairbets01">
                <img
                  _ngcontent-c5
                  alt="telegram"
                  src={Telegram}
                  style={{ height: "32px" }}
                />
                <span _ngcontent-c5 className="color: #fff;font-size: 12px;">
                  Telegram
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <FooterSubMenu />
    </>
  );
}

export default Menu;
