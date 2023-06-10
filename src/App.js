import logo from "./logo.svg";
import "./App.css";
import actions from "./Redux/Action/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import BetHistory from "./components/BetHistory";
import Exchange from "./components/Exchange";
import Lottrey from "./components/lottery";

function App() {
  const result = useSelector((state) => state.cartData);
  // console.log("==========>redux data in app ", result);
  const dispatch = useDispatch();
  const product = {
    item: "iphone",
    item2: "macbookPro",
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/bet-history" element={<BetHistory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/lottrey" element={<Lottrey />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/satta" element={<Satta />} />
          <Route path="/ezugi" element={<Ezugi />} />
          <Route path="/evolution" element={<Evolution />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/casino/topgames" element={<Topgames />} />
          <Route path="/casino/virtuals" element={<Virtuals />} />
          <Route path="/casino/blackjack" element={<Blackjack />} />
          <Route path="/casino/roulette" element={<Roulette />} />
          <Route path="/casino/andarbahar" element={<AndarBahar />} />
          <Route path="/casino/dragontiger" element={<DragonTiger />} />
          <Route path="/casino/baccarat" element={<Baccarat />} />
          <Route path="/casino/poker" element={<Poker />} />
          <Route path="/page/terms-conditions" element={<TermsCondition />} />
          <Route path="/page/aml-policy" element={<AmlPolicy />} />
          <Route path="/page/responsible-gaming" element={<ResponsibleGaming />} />
          <Route path="/page/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/page/terms&condition-nent" element={<TermsNent />} />
          <Route path="/account-statement" element={<AccountStatement />} />
          <Route path="/withdraw-request" element={<WithdrawRequest />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
