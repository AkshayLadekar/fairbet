import React from "react";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import "../Withdraw-Requests/withdraw-requests.css";

function WithdrawRequest() {
  return (
    <div>
      <Header1 />
      <div _ngcontent-c1="" className="col-lg-10 nopadding">
        <link
          _ngcontent-c4=""
          href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"
          rel="stylesheet"
        />
        <div _ngcontent-c4="" className="row no-gutters">
          <div _ngcontent-c4="" className="col-lg-8 nopadding">
            <h4 _ngcontent-c4="" className="bet-head">
              {" "}
              Withdraw Requests
            </h4>
            <div
              _ngcontent-c4=""
              className="my-beat-main pt--1"
              infinitescroll=""
            >
              <div _ngcontent-c4="" className="bg-black-bx">
                <div _ngcontent-c4="" className="het-hist-bx">
                  <div _ngcontent-c4="" className="row">
                    <div _ngcontent-c4="" className="col-lg-9">
                      <div _ngcontent-c4="" className="bet-date-bx">
                        <div
                          _ngcontent-c4=""
                          className="form-row text-yelo calc-wrap"
                        >
                          <div
                            _ngcontent-c4=""
                            className="col-sm-3"
                            style={{ width: "50%" }}
                          >
                            <label _ngcontent-c4="" htmlFor="">
                              From Date
                            </label>
                            <input
                              _ngcontent-c4=""
                              className="form-control hasDatepicker"
                              id="fromDate"
                              name="fromDate"
                              placeholder=""
                              style={{ padding: "0px 10px" }}
                              type="date"
                            />
                          </div>
                          <div
                            _ngcontent-c4=""
                            className="col-sm-3"
                            style={{ width: "50%" }}
                          >
                            <div _ngcontent-c4="" className="form-group">
                              <label _ngcontent-c4="" htmlFor="">
                                To Date
                              </label>
                              <input
                                _ngcontent-c4=""
                                className="form-control hasDatepicker"
                                id="toDate"
                                name="toDate"
                                placeholder=""
                                style={{ padding: "0px 10px" }}
                                type="text"
                              />
                            </div>
                          </div>
                          <div
                            _ngcontent-c4=""
                            className="col-sm-3"
                            style={{ width: "50%" }}
                          >
                            <label _ngcontent-c4="" htmlFor="">
                              Status
                            </label>
                            <select
                              _ngcontent-c4=""
                              className="custom-select2 sources form-control ng-untouched ng-pristine ng-valid"
                              id="status"
                              name="selectedStatus"
                            >
                              <option _ngcontent-c4="" value="AL">
                                {" "}
                                All{" "}
                              </option>
                              <option _ngcontent-c4="" value="P">
                                {" "}
                                Pending{" "}
                              </option>
                              <option _ngcontent-c4="" value="C">
                                {" "}
                                Cancelled{" "}
                              </option>
                              <option _ngcontent-c4="" value="A">
                                {" "}
                                Approved{" "}
                              </option>
                              <option _ngcontent-c4="" value="D">
                                {" "}
                                Decline{" "}
                              </option>
                              <option _ngcontent-c4="" value="H">
                                {" "}
                                Hold{" "}
                              </option>
                              <option _ngcontent-c4="" value="R">
                                {" "}
                                Reversed{" "}
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-c4="" className="col-lg-12">
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
                  </div>
                </div>
                <div _ngcontent-c4="" className="table-responsive support_dw">
                  <table
                    _ngcontent-c4=""
                    className="table bg-white my-bet-tabl tb_rightnew"
                  >
                    <thead _ngcontent-c4="">
                      <tr _ngcontent-c4="">
                        <th _ngcontent-c4="">S No. </th>
                        <th _ngcontent-c4="">Date</th>
                        <th _ngcontent-c4="">Amount</th>
                        <th _ngcontent-c4="">Status</th>
                      </tr>
                    </thead>
                    {/**/}
                    {/**/}
                    <tbody _ngcontent-c4="">
                      <tr _ngcontent-c4="">
                        <td
                          _ngcontent-c4=""
                          className="no-match-fount-txt"
                          colSpan={6}
                          style={{ textAlign: "left" }}
                        >
                          No Record Found!
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default WithdrawRequest;
