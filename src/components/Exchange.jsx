import React, { useState, useEffect } from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import "../css/satta.css"
import Cookies from "universal-cookie";
import axios from "axios";


function Exchange() {
    
    const [url, setUrl] = useState("");
    const cookies = new Cookies();
    useEffect(() => {
        const call = async () => {
            //exchange();
        };
        call();
      }, []);
      const get =cookies.get("userId")
      console.log("========>",get)

      const exchange = () => {
        // let data = JSON.stringify({
        //   mobile: helper.Encryption(otp)
        // });
        let data = JSON.stringify({
            clientUsername: get,
        });
        console.log("=======> 12",data)
        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "https://dpboss.deals/api/jetfair/jetfair",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };
    
        axios
          .request(config)
          .then((response) => {
            var res = response.url;
            console.log("===========> setUrl",res)
            setUrl(res)
            console.log("=============> res",res)
          })
          .catch((error) => {
            throw error;
          });
      };
  return (
    <>
      <Header1 />
      <div className="sattamatka">
        hello
        <iframe
          src={`https:\/\/jetfair.io\/lobby?Token=qRIxv%2fdAGyh2uW2jSXAKdQBrkZwNWHJcR6ThxE5AGX37ZVlkfbeCEdi4vqImRHP3%2fUmmt4C3UrM%3d`}
          //src={url}
          width="100%"
          frameborder="0"
          height="600px"
        ></iframe>
      </div>
      <Footer1 />
    </>
  );
}

export default Exchange;
