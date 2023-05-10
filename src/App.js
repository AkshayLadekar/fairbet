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

function App() {
  const result = useSelector((state) => state.cartData);
  console.log("==========>redux data in app ", result);
  const dispatch = useDispatch();
  const product = {
    item: "iphone",
    item2: "macbookPro",
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/casino" element={<Casino />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/slots" element={<Slots />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/satta" element={<Satta />} />
          <Route path="/ezugi" element={<Ezugi />} />
          <Route path="/evolution" element={<Evolution />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
