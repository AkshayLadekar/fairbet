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

        <h4 className="bet-head2">Feedback</h4>

        <div _ngcontent-c4 className="het-hist-bx-fed">
          <a _ngcontent-c4 className="bet-cent-btn-bx btn btn-gren">
            Feedback
          </a>
        </div>

        <div _ngcontent-c4 className="table-responsive">
          <table _ngcontent-c4 className="table bg-white">
            <thead _ngcontent-c4 className="fedtable">
              <tr _ngcontent-c4>
                <th width="20%" _ngcontent-c4>
                  #
                </th>
                <th _ngcontent-c4 width="20%">
                  Rating
                </th>
                <th _ngcontent-c4 width="20%">
                  Message
                </th>
                <th _ngcontent-c4 width="20%">
                  Date
                </th>
                <th _ngcontent-c4 width="20%">
                  Action
                </th>
              </tr>
            </thead>
            <tbody _ngcontent-c4>
              <tr _ngcontent-c4>
                <td>No Record Found!</td>
                <td>No Record Found!</td>
                <td>No Record Found!</td>
                <td>No Record Found!</td>
                <td>No Record Found!</td>
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
