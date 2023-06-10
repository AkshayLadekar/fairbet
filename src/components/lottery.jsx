import React, { useState, useEffect } from "react";
import Header1 from "./Header1";
import Footer1 from "./Footer1";
import "../css/satta.css"
import Cookies from "universal-cookie";
import axios from "axios";


function Lottrey() {
    
    const [url, setUrl] = useState("");
    const cookies = new Cookies();
    useEffect(() => {
        const call = async () => {
            lottrey();
        };
        call();
      }, []);
      const get =cookies.get("userId")
      console.log("========>",get)

      const lottrey = () => {
        // // let data = JSON.stringify({
        // //   mobile: helper.Encryption(otp)
        // // });
        // let data = JSON.stringify({
        //     userid: get,
        // });
        // console.log("=======> 12",data)
        // let config = {
        //   method: "post",
        //   maxBodyLength: Infinity,
        //   url: "https://dpboss.deals/api/lottery/lottery",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   data: data,
        // };
    
        // axios
        //   .request(config)
        //   .then((response) => {
        //     var res = response.url;
        //     console.log("===========> setUrl",res)
        //     setUrl(res)
        //     console.log("=============> res",res)
        //   })
        //   .catch((error) => {
        //     console.log("==========>error",error)
        //     throw error;
        //   });
        let data = JSON.stringify({
            "userid": "30694"
          });
          
          let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://dpboss.deals/api/lottery/lottery',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios.request(config)
          .then((response) => {
            console.log("===========>",JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log("=========>  error",error);
          });
          
      };
  return (
    <>
      <Header1 />
      <div className="sattamatka">
        hello
        <iframe
          src={`https:\/\/dpboss.deals\/lottery.php?token=QkwxOHZLcEVLWU5QZlNiZFVuR09Fdz09`}
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

export default Lottrey;
