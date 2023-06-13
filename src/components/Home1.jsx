import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import "../css/home1.css";
import Home from "../images/home.png";
import Cricket from "../images/cricket.png";
import Football from "../images/football.png";
import Tennis from "../images/ball.png";
import Horse from "../images/horse.png";
import Greyhound from "../images/greyhound.png";
import Basket from "../images/basketball.png";
import Rugby from "../images/rugby-ball.png";
import Card from "../images/new-home-images/ind-game.png";
import Sportsbook from "../images/trophy.png";
import Livecasino from "../images/casino-chip.png";
import Slot from "../images/slot-machine-7.png";
import Exchange from "../images/exchange.png";
import Tp2 from "../images/tp2.png";
import Tp6 from "../images/tp6.png";
import Tp3 from "../images/tp3.png";
import Tp5 from "../images/tp5.png";
import Tpgame from "../images/tp-game.png";
import Pcd from "../images/pcd.png";
import Footer1 from "./Footer1";
import Leaf from "../images/new-home-images/leaf.png";
import Ez from "../images/new-home-images/ez.png";
import Login from "./Login";
import { Api } from "../Api";

function Home1() {
  const [data, setData] = useState([]);
  const [modalShow1, setModalShow1] = useState(false);
  const [login, setLogin] = useState(false);
  const [iframeVisible, setIframeVisible] = useState(false);
  const [topGame1, setTopGame1] = useState([]);
  const navigate = useNavigate();
  const [modalShowLogin, setModalShowLogin] = useState(false);

  const navigateToSatta = () => {
    navigate("/satta");
  };

  const handleImageClick = () => {
    console.log("==========>123456", iframeVisible);
    setIframeVisible(true);
  };
  const navigateToCasino = () => {
    navigate("/casino");
  };

  const navigateToSlots = () => {
    navigate("/slots");
  };

  useEffect(() => {
    const postData = async () => {
      try {
        topGames();

        const response = await axios.get(
          "https://dpboss.deals/api/auth/getBanner"
        );
        setData(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    const topGames = async () => {
      let data = JSON.stringify({ game_name: "top-games", page: "1" });
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://dpboss.deals/api/auth/getCasinoMatches",
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
          setTopGame1(data);
        })
        .catch((error) => {
          return error;
        });
    };

    postData();
  }, []);

  useEffect(() => {}, [topGame1]);

  return (
    <>
      <Header1 login={login} />
      <Login
        show={modalShowLogin}
        onHide={() => setModalShowLogin(false)}
        close={() => setModalShowLogin(false)}
      />
      <section id="testimonials" className="testimonials secpd">
        <div className="container pad00">
          <div className="row justify-content-center">
            <div className="col-xl-3 col-lg-3  col-md-3   video-box d-flex justify-content-center align-items-stretch position-relative web-mnu">
              <div className="sidenav1 ">
                <a href="#" className="abtp">
                  <img src={Home} className="toggImg" />
                  HOME
                </a>
                <a href="#">
                  <img src={Cricket} className="toggImg" />
                  CRICKET
                </a>
                <a href="#">
                  <img src={Football} className="toggImg" />
                  FOOTBALL
                </a>
                <a href="#">
                  <img src={Tennis} className="toggImg" />
                  TENNIS
                </a>
                <a href="#">
                  <img src={Horse} className="toggImg" />
                  HORSE RACING
                </a>
                <a href="#">
                  {" "}
                  <img src={Greyhound} className="toggImg" />
                  GREYHOUND RACING
                </a>
                <a href="#">
                  <img src={Basket} className="toggImg" />
                  BASKETBALL
                </a>
                <a href="#">
                  <img src={Rugby} className="toggImg" />
                  RUGBY
                </a>
                <a href="#">
                  <img src={Card} className="toggImg" />
                  INDAIN CARD GAME
                </a>
                <a href="#">
                  <img src={Sportsbook} className="toggImg" />
                  SPORTSBOOK
                </a>
                <a href="#">
                  <img src={Livecasino} className="toggImg" />
                  LIVE CASINO
                </a>
                <a href="#">
                  <img src={Slot} className="toggImg" />
                  SLOT
                </a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 icon-boxes d-flex flex-column align-items-stretch justify-content-center">
              <div className="imgOuter">
                <Carousel interval={2000} loop="true" variant="dark">
                  {data?.map((review) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-flex w-100"
                          src={review.banner_image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
              <div className="repete-imag">
                <div className="row md-rwo tps colsp crvimgrst">
                  <div className="col-6 crvimg ">
                    <div
                      className="member-img"
                      // onBlur={() => {
                      //   //setLogin(false);
                      // }}
                      onClick={() => {
                        setModalShowLogin(true);
                        //handleImageClick();
                      }}
                    >
                      <img src={Exchange} className="img-fluid" alt="" />
                      {iframeVisible && (
                        <iframe
                          src="https://www.google.com"
                          width="500"
                          height="300"
                          title="IFrame"
                        />
                      )}
                    </div>
                    <div>
                      <div className="evol">
                        <p className="evol-label">
                          <img src={Leaf} className="list-logo" alt="" />{" "}
                          Evolution Lobby
                        </p>
                      </div>
                      <div className="evol cube">
                        <p className="evol-label evol-label-1">
                          <img src={Ez} className="list-logo" alt="" /> Ezugi
                          Lobby
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 crvimg">
                    <div
                      onClick={() => {
                        setModalShowLogin(true);
                        //handleImageClick();
                      }}
                      className="member-img"
                    >
                      <img src={Tp6} className="img-fluid" alt="" />
                    </div>
                    <div onClick={navigateToCasino} className="member-img">
                      <img src={Tp2} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row md-rwo  colsp crvimgrst">
                  <div className="col-6 crvimg ">
                    <div onClick={navigateToSlots} className="member-img">
                      <img src={Tp3} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-6 crvimg">
                    <div className="member-img">
                      <img src={Tp5} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="crdGame tpgame-sec">
                  <p className="crdNmar">
                    <img src={Tpgame} className="list-logo" alt="" /> Top Game
                  </p>
                </div>
              </div>
              <div className="repete-imag">
                <div className="row md-rwo tps1 colsp crvimgrst indTp">
                  {topGame1?.map((review) => {
                    var imgs = `https://fairbets.co/assets/casino_images/${review.ImageFullPath}`;
                    return (
                      <div className="col-4 crvimg">
                        <div className="member-img">
                          <img
                            src={`https://fairbets.co/assets/casino_images/${review.ImageFullPath}`}
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                      </div>
                    );
                  })}

                  {data?.map((review) => {
                    return (
                      <Carousel.Item>
                        <img
                          className="d-flex w-100"
                          src={review.banner_image}
                          alt="First slide"
                        />
                      </Carousel.Item>
                    );
                  })}
                  {/* <div className="col-4 crvimg">
                    <div className="member-img">
                      <img src={Pcd} className="img-fluid" alt="icon-image" />
                    </div>
                  </div>

                  <div className="col-4 crvimg">
                    <div className="member-img">
                      <img src={Pcd} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-4 crvimg">
                    <div className="member-img">
                      <img src={Pcd} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-4 crvimg">
                    <div className="member-img">
                      <img src={Pcd} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-4 crvimg">
                    <div className="member-img">
                      <img src={Pcd} className="img-fluid" alt="" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3  align-items-stretch position-relative web-mnu">
              <p className="betsl">BetSlip</p>
              <div className="lnkTb">
                <p>
                  <a href="#" className="btslp bsp">
                    Betslip
                  </a>
                  <a href="#" className="opnbt btslp">
                    Open Bets
                  </a>{" "}
                  <a href="#" className="btslp stk">
                    Edit Stakes
                  </a>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer1 />
    </>
  );
}

export default Home1;
