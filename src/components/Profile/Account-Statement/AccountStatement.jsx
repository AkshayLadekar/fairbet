import React from "react";
import Header1 from "../../Header1";
import Footer1 from "../../Footer1";
import "../Account-Statement/account-statement.css";

function AccountStatement() {
  return (
    <div>
      <Header1 />
      <div className="StatementOuter">
        <div className="searchTp">
          <div className="row row-mrs">
            <div className="col-4">
              <div className="input-outer">
                <label className="frDate">From Date</label>
                <input type="date" className="cntrl" placeholder="" />
              </div>
            </div>
            <div className="col-4">
              <div className="input-outer">
                <label className="frDate">To Date</label>
                <input type="date" className="cntrl" placeholder="" />
              </div>
            </div>
            <div className="col-4">
              <a href="#" className="searchBTn">
                SEARCH
              </a>
            </div>
            <div className="clrBoth" />
          </div>
        </div>
        <div className="tableOuter">
          <h2 className="stmnt">Account Statement:</h2>
          <div className="clrBoth" />
          <div className="tablinner">
            <table className="stat-mnt" style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <th>Date</th>
                  <td>:</td>
                  <td>Mar 30, 2023, 6:46:34 PM</td>
                </tr>
                <tr>
                  <th>Narration</th>
                  <td>:</td>

                  <td>Account</td>
                </tr>
                <tr>
                  <th>Credit/Debit </th>
                  <td>:</td>
                  <td className="lss">-120</td>
                </tr>
                <tr>
                  <th>Balance</th>
                  <td>:</td>

                  <td className="prfts">15638</td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav aria-label="...">
            <ul class="pagination justify-content-center">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  2
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer1 />
    </div>
  );
}

export default AccountStatement;
