import React from "react";
import Modal from "react-bootstrap/Modal";

const Withdraw = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="clsbtn" closeButton>
         WITHDRAW
      </Modal.Header>
      <Modal.Body>
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
                  style={{ width: "auto", border: 0 }}
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
                1)If withdrawal accounts of 2 or more ID are same both IDs will
                be blocked{" "}
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
                5)Do not put withdrawal request without depositing such request
                Will be categorised as suspicious activities{" "}
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default Withdraw;