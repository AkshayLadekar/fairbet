import React from "react";
import "../css/menu.css";
import Header from "./Header";
import FooterSubMenu from "./FooterSubMenu";
import Homemenu from "../images/home.svg"
import Satta from "../images/satta_m.png"
import Casino from "../images/casino.svg"
import LiveCasino from "../images/livecasino.svg"
import Slots from "../images/slots.svg"
import Virtuals from "../images/virtuals.svg"
import Blackjack from "../images/blackjack.svg"
import Roulette from "../images/roulette.svg"
import Andarbar from "../images/andar-bahar.svg"
import Dragontiger from "../images/dragon-tiger.svg"
import Baccarat from "../images/baccaret.svg"
import Poker from "../images/poker.svg"
import { Navigate, useNavigate } from "react-router-dom";




function Menu() {
  const navigate = useNavigate();
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
              <li _ngcontent-c1 >
                <a _ngcontent-c1 href="/">
                  <img
                    _ngcontent-c1
                    alt="home"
                    src={Homemenu}
                  />
                  <span _ngcontent-c1>Home</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/login">
                  <img
                    _ngcontent-c1
                    alt="Satta Matka"
                    src={Satta}
                  />
                  <span _ngcontent-c1>Satta Matka</span>
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
                  <img
                    _ngcontent-c1
                    alt="Casino"
                    src={Casino}
                  />
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
                  <img
                    _ngcontent-c1
                    alt="Slots"
                    src={Slots}
                  />
                  <span _ngcontent-c1>Slots</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/virtual-games">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Virtuals}
                  />
                  <span _ngcontent-c1>Virtuals</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/blackjack">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Blackjack}
                  />
                  <span _ngcontent-c1>Blackjack</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/roulette">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Roulette}
                  />
                  <span _ngcontent-c1>Roulette</span>
                </a>
              </li>
              <li _ngcontent-c1>
                <a _ngcontent-c1 href="/casinos/andar-bahar">
                  <img
                    _ngcontent-c1
                    alt="Virtuals"
                    src={Andarbar}
                  />
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
      </div>
      <FooterSubMenu />
    </>
  );
}

export default Menu;
