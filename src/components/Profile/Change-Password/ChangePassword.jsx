import React from "react";
import Modal from "react-bootstrap/Modal";

function ChangePassword(props) {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Change Password</Modal.Header>
        <Modal.Body>
          <div>
            <div className="container login">
              <form>
                <label>
                  <input
                    type="text"
                    className="input-search"
                    name="username"
                    placeholder="Old Password"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="input-search"
                    name="password"
                    placeholder="New Password"
                  />
                </label>
                <label>
                  <input
                    type="text"
                    className="input-search"
                    name="password"
                    placeholder="Confirm Password"
                    style={{marginBottom:"15px"}}
                  />
                </label>
                <button className="loginbtn mb-4" type="submit">
                  Change Password
                </button>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ChangePassword;
