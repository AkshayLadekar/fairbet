import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Casinobet from "../images/fairbets-casino.png";
import "../../src/css/casino.css";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import Lobby from "../images/lobby.jpg";
import f11 from "../images/live-casino/fl1.png";
import f12 from "../images/live-casino/fl2.png";
import f13 from "../images/live-casino/fl3.png";
import f14 from "../images/live-casino/fl4.png";
import f15 from "../images/live-casino/fl5.png";
import f16 from "../images/live-casino/fl6.png";
import f17 from "../images/live-casino/fl7.png";
import andar from "../images/live-casino/andar_bahar.jpg";

function Casino() {
  return (
    <>
      <div>
        <Header />
      </div>
      {/* <div>
      <form>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <button type="submit" className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </form>
      </div> */}

      {/* <div _ngcontent-c1 className="casinnologo"> */}
      {/* <img
          _ngcontent-c1
          alt="FAIRBETS
      CASINO"
          src={Casinobet}
          style={{ width: "172px", "margin-bottom": "11px", float: "left" }}
        /> */}

      {/* <div _ngcontent-c1 style={{ clear: "both" }} /> */}

      {/* <div>
          <DropdownButton
            variant="success"
            id="dropdown-basic-button"
            title="Provider List"
            className="drop"
          >
            <Dropdown.Item href="#/action-1">TVBet</Dropdown.Item>
            <Dropdown.Item href="#/action-2">EvoPlay</Dropdown.Item>
            <Dropdown.Item href="#/action-3">VivoGaming</Dropdown.Item>
            <Dropdown.Item href="#/action-3">WACS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">GameArt</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Ezugi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">GoldenRace</Dropdown.Item>
            <Dropdown.Item href="#/action-3">BetGames</Dropdown.Item>
            <Dropdown.Item href="#/action-3">EvoSW</Dropdown.Item>
          </DropdownButton>
        </div> */}

      {/* <div class="container-fluid">
          <div class="row">
            <div class="col-4 py-3">
              <img src={Lobby} class="img-fluid" />
            </div>
            <div class="col-4 py-3">
              <img src={Lobby} class="img-fluid" />
            </div>
            <div class="col-4 py-3">
              <img src={Lobby} class="img-fluid" />
            </div>
            <div class="col-4 py-3">
              <img src={Lobby} class="img-fluid" />
            </div>
            <div class="col-4 py-3">
              <img src={Lobby} class="img-fluid" />
            </div>
          </div>
        </div> */}
      {/* <div>
          {data1.map((item) => {
            console.log("Image", item.Image);
            return (
              <>
                <div class="row">
                  <div class="col-sm-3"><img src={Lobby} /></div>
                </div>
              </>
            );
          })}
        </div> */}
      {/* </div> */}

      <body>
        <div>
          <div className="casOuter">
            <div className="container1-casino">
              <div className="searchOuterbs">
                <div className="sercottr">
                  <input
                    type="text"
                    id="box"
                    placeholder="Search anything..."
                    className="searxhin"
                  />
                  <span className="search-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-search"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="clrBoth" />
              <div className="scrolling-wrapper-casio row flex-row flex-nowrap">
                <a href="#" className="col-5 casnTb">
                  <img src={f11} />
                  <span>All Games</span>
                </a>
                <a href="#" className="col-5 casnTb">
                  <img src={f12} />
                  <span>Roulette </span>
                </a>
                <a href="#" className="col-5 casnTb">
                  <img src={f13} />
                  <span>Game Shows</span>
                </a>
                <a href="#" className="col-5 casnTb">
                  <img src={f14} />
                  <span>Blackjack</span>
                </a>
                <a href="#" className="col-5 casnTb">
                  <img src={f15} />
                  <span>Baccarat</span>
                </a>
                <a href="#" className="col-5 casnTb">
                  <img src={f16} />
                  <span>Dice Games</span>
                </a>
                <a href="#" className="col-5 casnTb nortBor">
                  <img src={f17} />
                  <span>Pocker</span>
                </a>
              </div>
            </div>
          </div>

          <div className="casinoMainDv">
            <div className="row md-rwo tps colsp crvimgrst indTp">
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-4 crv-csn">
                <div className="member-img">
                  <div>
                    <a href="/login">
                      <img alt="" className="img-fluid" src={andar} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="clrBoth" />
          </div>
        </div>
      </body>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default Casino;
