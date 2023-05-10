import React from "react";
import "../css/payment.css";

function Payment() {
  return (
    <div className="modal-body payMain ouerMainDv" style={{ padding: "0px" }}>
      <ul className="nav nav-tabs justify-content-center" role="tablist">
        <li className="active">
          <a
            className="active show"
            data-toggle="tab"
            href="#deposit"
            role="tab"
            aria-selected="true"
          >
            <img src="images/icon/deposit.svg" width="17%" />
            <span>Deposit</span>
          </a>
        </li>
        <li>
          <a
            className
            data-toggle="tab"
            href="#withdraw"
            role="tab"
            aria-selected="false"
          >
            <img src="images/icon/withdraw.svg" width="17%" />
            <span>Withdraw</span>
          </a>
        </li>
      </ul>
      <div className="content-tabs">
        <div className="tab-content tab-content-2">
          {/*-------------- deposite  ------------------*/}
          <div className="tab-pane active show" id="deposit" role="tabpanel">
            <ul
              className="type nav nav-tabs justify-content-center auto-nner"
              role="tablist"
            >
              <li className="active">
                <a className="active show" data-toggle="tab" href role="tab">
                  <span>Automatic</span>
                </a>
              </li>
              <li style={{ display: "none" }}>
                <a className data-toggle="tab" href role="tab">
                  <span>Instant</span>
                </a>
              </li>
            </ul>
            <div
              className="tab-content-tsp tab-table-data tpmar"
              id="automatic"
              style={{}}
            >
              <ul className="paymentlist" style={{}}>
                <li>
                  <a href>
                    <img alt="UPI" src="images/upi.svg" /> UPI{" "}
                    <span className="fa fa-angle-right" />
                  </a>
                </li>
              </ul>
              {/*--------------  UPI amount  ------------------*/}
              <div>
                <ul className="paymentlist imgsize">
                  <li>
                    <a href=" ">
                      <img className="ist-img" src="images/ab-upi1.png" />
                    </a>
                  </li>
                  <li>
                    <a href=" ">
                      <img className="ist-img" src="images/a2z-upi1.png" />
                    </a>
                  </li>
                </ul>
                <div className="clrBoth" />
                <div className="btmMain">
                  <a className="btn-bk mt-2 ml-2" href>
                    Back
                  </a>
                  <div className="clrBoth" />
                </div>
              </div>
              {/*--------------  #UPI amount  ------------------*/}
              {/*--------------  withdrw amount  ------------------*/}
              <div>
                <div className="pdlft0">
                  <div className="group">
                    <input
                      className="form-control-amt"
                      id="Amount"
                      placeholder="Amount"
                      type="number"
                    />
                    <small className="min-depo">
                      {" "}
                      You can deposit minimum 300.
                    </small>
                  </div>
                  <div className="amtmain amtd justify-content-center">
                    <span className="btn btn-primary am">300</span>
                    <span className="btn btn-primary am">500</span>
                    <span className="btn btn-primary am">1000</span>
                    <span className="btn btn-primary am">2000</span>
                    <span className="btn btn-primary am">5000</span>
                  </div>
                  <div>
                    <div className="innerPay InnerSub">
                      <div className="row-cust justify-content-center msbt">
                        <label className="col-2 potion">
                          <img src="images/17.png" />
                        </label>
                        <label className="col-2 potion">
                          <img src="images/18.png" />
                        </label>
                        <label className="col-2 potion">
                          <img src="images/16.png" />
                        </label>
                        <label className="col-2 potion">
                          <img src="images/15.png" />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btmMain-2">
                  <a className="btn-bk mt-2 ml-2" href>
                    Back
                  </a>
                  <button className="sbBtn" id="gtm-login_button" type="submit">
                    {" "}
                    Submit{" "}
                  </button>
                  <div className="clrBoth" />
                </div>
              </div>
              {/*-------------- #withdrw amount  ------------------*/}
            </div>
          </div>
          {/*-------------- # deposite  ------------------*/}
          {/*---------------- ##Withdrawal  -----------------*/}
          <div className="tab-pane " id="withdraw" role="tabpanel">
            <div className="tab-content-tsp tab-table-data tabpne-with tpmar">
              <div className="withdraw_div">
                <form name="withdrawal_form_fill">
                  <div className="note">
                    <strong>Note: </strong> To change the withdrawal account
                    details please contact support.{" "}
                  </div>
                  <div className="form-group-cust">
                    <label>Withdrawal Amount</label>
                    <input
                      className="form-control"
                      formcontrolname="WAmount"
                      type="number"
                    />
                    <small className="min-depo">
                      You can withdrawal minimum 1000 and maximum 50,000.
                    </small>
                  </div>
                  <div className="form-group-cust">
                    <label htmlFor="account">Account Holder Name</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group-cust">
                    <label htmlFor="account">Bank Name</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group-cust">
                    <label htmlFor="account">Bank Account Number</label>
                    <input className="form-control" type="text" />
                  </div>
                  <div className="form-group-cust">
                    <label htmlFor="account">IFSC Code</label>
                    <input className="form-control" type="text" />
                  </div>
                  <button
                    className="submitBtn"
                    style={{ width: "auto", border: "0" }}
                    type="submit"
                  >
                    {" "}
                    Submit{" "}
                  </button>
                  <a
                    className="submitBtn"
                    href="/m/dwrequest-statement"
                    style={{ float: "right" }}
                  >
                    Cancel Withdraw Requests
                  </a>
                </form>
                <p className="point">
                  {" "}
                  1)If withdrawal accounts of 2 or more ID are same both IDs
                  will be blocked{" "}
                </p>
                <p className="point">
                  {" "}
                  2)If two IDs have same IP both IDs will be blocked{" "}
                </p>
                <p className="point">
                  {" "}
                  3)Bonus should be wagered @5x before you can withdraw it{" "}
                </p>
                <p className="point">
                  {" "}
                  4)If betting pattern of 2 IDs is same both will be blocked{" "}
                </p>
                <p className="point">
                  {" "}
                  5)Do not put withdrawal request without depositing such
                  request Will be categorised as suspicious activities{" "}
                </p>
              </div>
            </div>
          </div>
          {/*---------------- Withdrawal  -----------------*/}
        </div>
      </div>
    </div>
  );
}

export default Payment;
