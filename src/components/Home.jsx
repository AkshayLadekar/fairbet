import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "./Footer";
import "../css/home.css";
import Tpgame from "../images/tp-game.png";
import Sl1 from "../images/sl1.png";
import Sl2 from "../images/sl2.png";
import Tp1 from "../images/tp1.png";
import Tp2 from "../images/tp2.png";
import Tp3 from "../images/tp3.png";
import Tp4 from "../images/tp4.png";
import Tp5 from "../images/tp5.png";
import Tp6 from "../images/tp6.png";
import Exchange from "../images/exchange.png";
import Leaf from "../images/leaf.png";
import Pl from "../images/pl.png";
import Tgpm from "../images/tpgm.png";
import Pls from "../images/pls.png";
import Pcd from "../images/pcd.png";
import Smbl from "../images/exchange-smbl.png";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const navigateToSatta = () => {
    navigate('/satta');
  };

  const navigateToCasino = () => {
    navigate('/casino');
  };

  const navigateToSlots = () => {
    navigate('/slots');
  };

  useEffect(() => {
    const postData = async () => {
      try {
        const response = await axios.get(
          "https://fairbets.co/api/v1/getBanner"
          // {
          //   limit: 10,
          //   pageno: 1,
          // }
        );
        setData(response.data.data);
        // console.log("==================>", data);
      } catch (error) {
        console.error(error);
      }
    };
    postData();
  }, []);

  return (
    <>
      <div>
        <Header />
      </div>

      <div className="top_menu">
        <ul>
          <li>
            <a href="/dashboard">Exchange</a>
          </li>
          <li>
            <a href="/casino">Live casino</a>
          </li>
          <li>
            <a href="/satta">Satta Matka</a>
          </li>
        </ul>
      </div>

      <section id="testimonials" className="testimonials secpd">
        <div className="pad00">
          <Carousel interval={2000} loop="true" variant="dark">
            {data.map((review) => {
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

          {/* <div className="row md-rwo tps colsp tes">
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Tp1} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Tp2} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Tp3} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Tp4} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Tp5} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Tp6} className="img-fluid" alt />
              </div>
            </div>
          </div> */}
          <div className="repete-imag">
            <div className="row md-rwo tps colsp crvimgrst">
              <div className="col-6 crvimg ">
                <div className="member-img">
                  <img src={Exchange} className="img-fluid" alt />
                </div>
                <div>
                  <div className="evol">
                    <p className="evol-label">
                      <img src={Leaf} className="list-logo" alt /> Evolution
                      Lobby
                    </p>
                  </div>
                  <div className="evol cube">
                    <p className="evol-label">
                      <img src={Smbl} className="list-logo" alt /> Evolution
                      Lobby
                    </p>
                  </div>
                </div>
              </div>
              <div  className="col-6 crvimg">
                <div onClick={navigateToSatta} className="member-img">
                  <img src={Tp6} className="img-fluid" alt />
                </div>
                <div onClick={navigateToCasino} className="member-img">
                  <img src={Tp2} className="img-fluid" alt />
                </div>
              </div>
            </div>
            <div className="row md-rwo  colsp crvimgrst1">
              <div className="col-6 crvimg ">
                <div onClick={navigateToSlots} className="member-img">
                  <img src={Tp3} className="img-fluid" alt />
                </div>
              </div>
              <div className="col-6 crvimg">
                <div className="member-img">
                  <img src={Tp5} className="img-fluid" alt />
                </div>
              </div>
            </div>
            {/* <div className="crdGame tpgame-sec">
              <p className="crdNmar">
                <img src={Tpgame} className="list-logo" alt /> Top Game
              </p>
            </div> */}
          </div>
          {/* <div className="inplayMain tpe">
            <div className="inplay-popular-header inplay-header-color">
              <div className="inplay-popular-header__logo">
                <img src={Pl} className="inpl" />{" "}
                <span className="inplay-popular-header__logo-text">
                  {" "}
                  In Play
                </span>
              </div>
              <div className="inplay-popular-header__bets"> </div>
            </div>
          </div> */}
        </div>
        {/* <div className="repete-imag">
          <div className="crdGame">
            <p className="crdNmar">
              <img src={Tgpm} className="list-logo" alt /> Indian Card Games
            </p>
          </div>
          <div className="row md-rwo tps colsp crvimgrst">
            <div className="col-6 crvimg ">
              <div className="member-img">
                <img src={Pls} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-6 crvimg">
              <div className="member-img">
                <img src={Pls} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-6 crvimg">
              <div className="member-img">
                <img src={Pls} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-6 crvimg">
              <div className="member-img">
                <img src={Pls} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-6 crvimg">
              <div className="member-img">
                <img src={Pls} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-6 crvimg">
              <div className="member-img">
                <img src={Pls} className="img-fluid" alt />
              </div>
            </div>
          </div>
        </div> */}
        <div className="repete-imag">
          <div className="crdGame tpgame-sec">
            <p className="crdNmar">
              <img src={Tpgame} className="list-logo" alt /> Top Game
            </p>
          </div>
          <div className="row md-rwo tps colsp crvimgrst indTp">
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Pcd} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Pcd} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Pcd} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Pcd} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Pcd} className="img-fluid" alt />
              </div>
            </div>
            <div className="col-4 crvimg">
              <div className="member-img">
                <img src={Pcd} className="img-fluid" alt />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
