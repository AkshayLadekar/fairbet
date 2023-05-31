import React from "react";
import Header from "./Header1";
// import FooterSubMenu from "./FooterSubMenu";
import Footer1 from "./Footer1";
import "../css/feedback.css";

function Feedback() {
  return (
    <>
      <div className="bck">
        <div>
          <Header />
        </div>

        <div _ngcontent-c4 className="het-hist-bx">
          <a _ngcontent-c4 className="bet-cent-btn-bx btn btn-gren">
            Feedback
          </a>
        </div>

        <div _ngcontent-c4 className="table-responsive">
          <table
            _ngcontent-c4
            className="table bg-white my-bet-tabl tb_rightnew
                  tb_support"
          >
            <thead _ngcontent-c4>
              <tr _ngcontent-c4>
                <th _ngcontent-c4>#</th>
                <th _ngcontent-c4 style={{ width: "92px" }}>
                  Rating
                </th>
                <th _ngcontent-c4>Message</th>
                <th _ngcontent-c4>Date</th>
                <th _ngcontent-c4>Action</th>
              </tr>
            </thead>
            {/**/}
            {/**/}
            <tbody _ngcontent-c4>
              <tr _ngcontent-c4>
                <td
                  _ngcontent-c4
                  className="no-match-fount-txt"
                  colSpan={5}
                  style={{ "-webkit-text-align": "left", "text-align": "left" }}
                >
                  No Record Found!
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <Footer1 />
        </div>
      </div>
    </>
  );
}

export default Feedback;
