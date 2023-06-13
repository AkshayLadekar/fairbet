import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header1";
import Footer from "../Footer1";
import { Navigate, useNavigate } from "react-router-dom";
import { Container, Dropdown, DropdownButton } from "react-bootstrap";
import Lobby from "../../images/lobby.jpg";
import Casinobet from "../../images/fairbets-casino.png";
import "../../css/andarbahar.css";

function AndarBahar() {
  const [topGame1, setTopGame1] = useState([]);
  const [data, setData] = useState([]);

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
      let data = JSON.stringify({ game_name: "andar-bahar", page: "1" });
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
      <div>
        <Header />
      </div>
      <div>
        <form className="subforms">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
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
      </div>

      <div _ngcontent-c1 className="casinnologo">
        <img
          _ngcontent-c1
          alt="FAIRBETS
      CASINO"
          src={Casinobet}
          style={{ width: "172px", "margin-bottom": "11px", float: "left" }}
        />

        <div _ngcontent-c1 style={{ clear: "both" }} />

        <div>
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
        </div>

        <div class="container-fluid">
          <div class="row">
            {topGame1?.map((review) => {
              var imgs = `https://fairbets.co/assets/casino_images/${review.ImageFullPath}`;
              return (
                <div class="col-4 py-3">
                  <img src={`https://fairbets.co/assets/casino_images/${review.ImageFullPath}`} class="img-fluid" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default AndarBahar;
