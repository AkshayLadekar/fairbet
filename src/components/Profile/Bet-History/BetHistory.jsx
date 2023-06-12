import React from "react";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import "../Bet-History/bet-history.css";

function BetHistory() {
  return (
    <div>
      <Header1 />
      <div className="row no-gutters mar1">
        <h4 className="bet-head1">MY BETS</h4>
        <div className="container">
          <div className="row">
            <div class="col-sm-6 col-md-4 col-4">
              <label _ngcontent-c4="" htmlFor="">
                From Date
              </label>
              <input
                _ngcontent-c4=""
                className="form-control"
                id="fromDate"
                name="fromDate"
                placeholder=""
                type="date"
                fdprocessedid="6ugcf8"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-4">
              <label _ngcontent-c4="" htmlFor="">
                To Date
              </label>
              <input
                _ngcontent-c4=""
                className="form-control"
                id="fromDate"
                name="fromDate"
                placeholder=""
                type="date"
                fdprocessedid="6ugcf8"
              />
            </div>
            <div class="col-sm-6 col-md-4 col-4">
              <label _ngcontent-c4="" htmlFor="">
                Sport
              </label>
              <select
                _ngcontent-c4=""
                className="form-select"
                fdprocessedid="87re0f"
              >
                <option _ngcontent-c4="" value={0}>
                  All
                </option>
                {/**/}
                <option _ngcontent-c4="" value={4}>
                  Cricket
                </option>
                <option _ngcontent-c4="" value={2}>
                  Tennis
                </option>
                <option _ngcontent-c4="" value={1}>
                  Soccer
                </option>
                <option _ngcontent-c4="" value={111}>
                  Casino
                </option>
                <option _ngcontent-c4="" value={7}>
                  Horse Racing
                </option>
                <option _ngcontent-c4="" value={4339}>
                  Greyhound
                </option>
                <option _ngcontent-c4="" value={7522}>
                  Basketball
                </option>
                <option _ngcontent-c4="" value={1477}>
                  Rugby League
                </option>
                <option _ngcontent-c4="" value={5}>
                  Rugby Union
                </option>
                <option _ngcontent-c4="" value={7511}>
                  Baseball
                </option>
                <option _ngcontent-c4="" value={6}>
                  Boxing
                </option>
                <option _ngcontent-c4="" value={6422}>
                  Snooker
                </option>
              </select>
            </div>
          </div>
          <div _ngcontent-c4="" className="col-12 col-md-6">
            <ul _ngcontent-c4="" className="bet-cent betnew_cent">
              <li _ngcontent-c4="">
                <a
                  _ngcontent-c4=""
                  className="bet-cent-btn-bx btn btn-gren activeButton"
                  id="runingbtn"
                >
                  Running
                </a>
              </li>
              <li _ngcontent-c4="">
                <a
                  _ngcontent-c4=""
                  className="bet-cent-btn-bx btn btn-gren"
                  id="complatebtn"
                >
                  Completed
                </a>
              </li>
            </ul>
          </div>
          <div _ngcontent-c4="" className="table-responsive tble">
            <table _ngcontent-c4="" className="table bg-white my-bet-tab2">
              <thead _ngcontent-c4="">
                <tr _ngcontent-c4="">
                  <th _ngcontent-c4="" className="wd-24">
                    Description
                  </th>
                  <th _ngcontent-c4="">Market</th>
                  <th _ngcontent-c4="">Odds</th>
                  <th _ngcontent-c4="">Stack</th>
                  <th _ngcontent-c4="" className="wd-221">
                    P&amp;L
                  </th>
                  {/**/}
                  <th _ngcontent-c4="">Liability</th>
                  {/**/}
                </tr>
              </thead>
              <tbody _ngcontent-c4="">
                {/**/}
                <tr _ngcontent-c4="">
                  <td
                    _ngcontent-c4=""
                    className="no-match-fount-txt"
                    colSpan={9}
                  >
                    No Record Found
                  </td>
                </tr>
                {/**/}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer1 />
    </div>
  );
}

export default BetHistory;
