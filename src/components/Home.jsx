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



  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: 'http://3.1.242.135/api/auth/getStateList',
    headers: { }
  };
  
  axios.request(config)
  .then((response) => {
    console.log("========>111111",JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log("==========>22222222222",error);
  });
  
  
  
  
  //working
  
  
  // let msg = "";
  
  // // the key and iv should be 32 hex digits each, any hex digits you want, but it needs to be 32 on length each
  // let key = encHex.parse("0123456789abcdef0123456789abcdef");
  // let iv =  encHex.parse("abcdef9876543210abcdef9876543210");
  
  // // encrypt the message
  // let encrypted = aes.encrypt(msg, key, {iv:iv, padding:padZeroPadding}).toString();
  
  // console.log("==========>",encrypted)
  
  //Encrypted string
  
  
  
  
  
  
  
  //workig
  
  const CryptoJS = require('crypto-js');
  const AES = require('crypto-js/aes');
  const Hex = require('crypto-js/enc-hex');
  const ZeroPadding = require('crypto-js/pad-zeropadding');
  
  // Encrypted string
  let encrypted = "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";
  
  // Key and IV
  let key = Hex.parse("0123456789abcdef0123456789abcdef");
  let iv = Hex.parse("abcdef9876543210abcdef9876543210");
  
  // Decrypt the message
  let decrypted = AES.decrypt(encrypted, key, { iv: iv, padding: ZeroPadding }).toString(CryptoJS.enc.Utf8);
    
  console.log("========>1",decrypted)
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
