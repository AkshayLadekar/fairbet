import React from "react";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import "../Withdraw-Requests/withdraw-requests.css";

function WithdrawRequest() {
  return (
    <div>
      <Header1 />
      <div className="row no-gutters mar">
        <h4 className="bet-head">Withdraw Requests</h4>
        <div className="container">
          <div className="row">
            <div class="col-sm-6 col-md-4 col-6">
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
            <div class="col-sm-6 col-md-4 col-6">
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
            <div class="col-sm-6 col-md-4 col-6">
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
                <option _ngcontent-c4="" value={0}>
                  Pending
                </option>
                {/**/}
                <option _ngcontent-c4="" value={4}>
                  Cancelled
                </option>
                <option _ngcontent-c4="" value={2}>
                  Approved
                </option>
                <option _ngcontent-c4="" value={1}>
                  Decline
                </option>
                <option _ngcontent-c4="" value={111}>
                  Hold
                </option>
                <option _ngcontent-c4="" value={7}>
                  Reverse
                </option>
              </select>
            </div>
          </div>
          <div _ngcontent-c4="" className="col-12 col-md-6">
            <ul _ngcontent-c4="" className="bet-cent betnew_cent">
              <li _ngcontent-c4="">
                <a
                  _ngcontent-c4=""
                  className="bet-cent-btn-bx btn
              btn-gren"
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div _ngcontent-c4="" className="table-responsive tble">
            <table _ngcontent-c4="" className="table bg-white my-bet-tab2">
              <thead _ngcontent-c4="">
                <tr _ngcontent-c4="">
                  <th _ngcontent-c4="" className="wd-24">
                    S.NO
                  </th>
                  <th _ngcontent-c4="">Date</th>
                  <th _ngcontent-c4="">Amount</th>
                  <th _ngcontent-c4="">Status</th>
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

export default WithdrawRequest;
