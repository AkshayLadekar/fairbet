import React from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import "../css/satta.css"
import Cookies from "universal-cookie";

function Satta() {
  const cookies = new Cookies();
  return (
    <>
      <Header1 />
      <div className="sattamatka">
        <iframe
          src={`https://nandi.live/?token=&id=${cookies.get("userId")}&app=LM`}
          width="100%"
          frameborder="0"
          height="600px"
        ></iframe>
      </div>

      <Footer1 />
    </>
  );
}

export default Satta;
