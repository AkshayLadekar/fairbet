import React from 'react'
import Modal from "react-bootstrap/Modal";


function Support(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>FEEDBACK</Modal.Header>
      <Modal.Body>
        <div>
          <div className="container login">
            <form >
              <label>
                <input
                  type="text"
                  className="input-search"
                  name="username"
                  placeholder='Name*'
                />
              </label>
              <label>
                <input
                  type="text"
                  className="input-search"
                  name="password"
                  placeholder='Mobile Number*'
                />
              </label>
              <label>
                <input
                  type="text"
                  className="input-search"
                  name="password"
                  placeholder='Message*'
                />
              </label>
              <button className="loginbtn mb-4" type="submit">
                SEND
              </button>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  )
}

export default Support