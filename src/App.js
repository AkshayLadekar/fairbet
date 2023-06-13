import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import actions from "./Redux/Action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Menu from "./components/Menu";
import Casino from "./components/Casino";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Slots from "./components/Slots";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Satta from "./components/Satta";
import Payment from "./components/Payment";
import Ezugi from "./components/Ezugi";
import Evolution from "./components/Evolution";
import Feedback from "./components/Feedback";
import Topgames from "./components/Casinos/Topgames";
import Virtuals from "./components/Casinos/Virtuals";
import Blackjack from "./components/Casinos/Blackjack";
import Roulette from "./components/Casinos/Roulette";
import AndarBahar from "./components/Casinos/AndarBahar";
import DragonTiger from "./components/Casinos/DragonTiger";
import Baccarat from "./components/Casinos/Baccarat";
import Poker from "./components/Casinos/Poker";
import TermsCondition from "./components/Page/TermsCondition";
import AmlPolicy from "./components/Page/AmlPolicy";
import ResponsibleGaming from "./components/Page/ResponsibleGaming";
import PrivacyPolicy from "./components/Page/PrivacyPolicy";
import TermsNent from "./components/Page/TermsNent";
import Home1 from "./components/Home1";
import AccountStatement from "./components/Profile/Account-Statement/AccountStatement";
import WithdrawRequest from "./components/Profile/Withdraw-Requests/WithdrawRequest";
import BetHistory from "./components/Profile/Bet-History/BetHistory";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import Exchange from "./components/Exchange";
import Lottrey from "./components/lottery";
import Cookies from "universal-cookie";
import Login1 from "./components/login1";
function App() {
  const result = useSelector((state) => state.cartData);
  const [jwtToken, setJwtToken] = useState("");
  const [modalShowLogin, setModalShowLogin] = useState(false);
  const [tokenAvailable, setTokenAvailable] = useState(false);
  // console.log("==========>redux data in app ", result);
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  console.log("==========>window.location", window.location.pathname);
  const product = {
    item: "iphone",
    item2: "macbookPro",
  };

  //window.location.pathname
  // const state = () => {
  //   setModalShowLogin(true);
  // };
  console.log("=========> available", tokenAvailable);
  const cookies = new Cookies();
  const tokens = cookies.get("jwt-authorization");
  console.log("==========>b ", tokens);

  useEffect(() => {
    console.log("==========>window.location", window.location.pathname);
    const setState = () => {
      if (
        !cookies.get("jwt-authorization") &&
        window.location.pathname !== "/"
      ) {
        console.log("=========>in condition  ",)
        setModalShowLogin(true);
      }
    };
    setState();
  });

  useEffect(() => {
    const token = () => {
      if (tokens) {
        setTokenAvailable(true);
      }
    };
    token();
  }, []);
  return (
    <>
      <BrowserRouter>
      {modalShowLogin && (
        <Login
          show={modalShowLogin}
          onHide={() => setModalShowLogin(false)}
          close={() => setModalShowLogin(false)}
        />
      )}
        {/* <Routes>
          <Route path="/" element={<Home1 />} />
          <Route
            path="/bet-history"
            element={<BetHistory />}
          />
          <Route
            path="/menu"
            element={<Menu />}
          />
          <Route
            path="/casino"
            element={<Casino />}
          />
          <Route
            path="/lottrey"
            element={<Lottrey />}
          />
          <Route path="/exchange" element={<Exchange />} />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/slots"
            element={<Slots />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/payment"
            element={<Payment /> }
          />
          <Route
            path="/satta"
            element={<Satta />}
          />
          <Route
            path="/ezugi"
            element={<Ezugi />}
          />
          <Route
            path="/evolution"
            element={<Evolution />}
          />
          <Route
            path="/feedback"
            element={<Feedback />}
          />
          <Route
            path="/casino/topgames"
            element={<Topgames />}
          />
          <Route
            path="/casino/virtuals"
            element={<Virtuals />}
          />
          <Route
            path="/casino/blackjack"
            element={<Blackjack />}
          />
          <Route
            path="/casino/roulette"
            element={<Roulette />}
          />
          <Route
            path="/casino/andarbahar"
            element={<AndarBahar />}
          />
          <Route
            path="/casino/dragontiger"
            element={<DragonTiger />}
          />
          <Route
            path="/casino/baccarat"
            element={<Baccarat />}
          />
          <Route
            path="/casino/poker"
            element={<Poker />}
          />
          <Route
            path="/page/terms-conditions"
            element={<TermsCondition />}
          />
          <Route
            path="/page/aml-policy"
            element={<AmlPolicy />}
          />
          <Route
            path="/page/responsible-gaming"
            element={<ResponsibleGaming />}
          />
          <Route path="/page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page/terms&condition-nent" element={<TermsNent />} />
          <Route path="/account-statement" element={<AccountStatement />} />
          <Route path="/withdraw-request" element={<WithdrawRequest />} />
        </Routes> */}
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route
            path="/bet-history"
            element={tokenAvailable ? <BetHistory /> : <Login1 />}
          />
          <Route
            path="/menu"
            element={tokenAvailable ? <Menu /> : <Login1 />}
          />
          <Route
            path="/casino"
            element={tokenAvailable ? <Casino /> : <Login1 />}
          />
          <Route
            path="/lottrey"
            element={tokenAvailable ? <Lottrey /> : <Login1 />}
          />
          <Route path="/exchange" element={<Exchange />} />
          <Route
            path="/login"
            element={tokenAvailable ? <Login /> : <Login1 />}
          />
          <Route
            path="/signup"
            element={tokenAvailable ? <SignUp /> : <Login1 />}
          />
          <Route
            path="/slots"
            element={tokenAvailable ? <Slots /> : <Login1 />}
          />
          <Route
            path="/profile"
            element={tokenAvailable ? <Profile /> : <Login1 />}
          />
          <Route
            path="/payment"
            element={tokenAvailable ? <Payment /> : <Login1 />}
          />
          <Route
            path="/satta"
            element={tokenAvailable ? <Satta /> : <Login1 />}
          />
          <Route
            path="/ezugi"
            element={tokenAvailable ? <Ezugi /> : <Login1 />}
          />
          <Route
            path="/evolution"
            element={tokenAvailable ? <Evolution /> : <Login1 />}
          />
          <Route
            path="/feedback"
            element={tokenAvailable ? <Feedback /> : <Login1 />}
          />
          <Route
            path="/casino/topgames"
            element={tokenAvailable ? <Topgames /> : <Login1 />}
          />
          <Route
            path="/casino/virtuals"
            element={tokenAvailable ? <Virtuals /> : <Login1 />}
          />
          <Route
            path="/casino/blackjack"
            element={tokenAvailable ? <Blackjack /> : <Login1 />}
          />
          <Route
            path="/casino/roulette"
            element={tokenAvailable ? <Roulette /> : <Login1 />}
          />
          <Route
            path="/casino/andarbahar"
            element={tokenAvailable ? <AndarBahar /> : <Login1 />}
          />
          <Route
            path="/casino/dragontiger"
            element={tokenAvailable ? <DragonTiger /> : <Login1 />}
          />
          <Route
            path="/casino/baccarat"
            element={tokenAvailable ? <Baccarat /> : <Login1 />}
          />
          <Route
            path="/casino/poker"
            element={tokenAvailable ? <Poker /> : <Login1 />}
          />
          <Route
            path="/page/terms-conditions"
            element={tokenAvailable ? <TermsCondition /> : <Login1 />}
          />
          <Route
            path="/page/aml-policy"
            element={tokenAvailable ? <AmlPolicy /> : <Login1 />}
          />
          <Route
            path="/page/responsible-gaming"
            element={<ResponsibleGaming />}
          />
          <Route path="/page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page/terms&condition-nent" element={<TermsNent />} />
          <Route path="/account-statement" element={<AccountStatement />} />
          <Route path="/withdraw-request" element={<WithdrawRequest />} />
        </Routes>
      </BrowserRouter>
      {/* ) : (
        <Login
          show={modalShowLogin}
          onHide={() => setModalShowLogin(false)}
          close={() => setModalShowLogin(false)}
        />
      )} */}
    </>
  );
}

export default App;
