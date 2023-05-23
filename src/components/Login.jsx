import React, { useState, useEffect } from "react";
import "../css/login.css";
import Whatsapp from "../images/whatsapp-green.png";
import Modal from "react-bootstrap/Modal";
import SignUp from "./SignUp";

function Login(props) {
  const intialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\\$@]+@[^\\$@]+\\.[^\\$@]{2,}$/i;

    if (!values.username) {
      errors.username = "Username is required!";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    } else if (values.password < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password > 16) {
      errors.password = "Password cannot be more than 16 characters";
    }
    return errors;
  };

  const [modalShow3, setModalShow3] = useState(false);

  // const modalClose = () => {
  //   setFormValues({ username: "", email: "", password: "" });
  //   props.close();
  // };

  const handleClose = () => {
    setFormValues({ username: "", email: "", password: "" });
    setModalShow3(false);
    props.onHide();
  };

  function modalClose(e) {
    setModalShow3(true);
    props.akki()
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      // onHide={modalClose}
      
    >
      
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div>
         
          <div className="container login">
            <form onSubmit={handleSubmit}>
              <label>
                Username/ Email / Mobile Number:
                <input
                  type="email"
                  className="input-search"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  className="input-search"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                <a href=""><i class="fa fa-eye-slash" aria-hidden="false"></i></a>
              </label>
              <p>{formErrors.password}</p>
              <label>Forget Password ?</label>
              <button className="loginbtn mb-4" type="submit">
                LOGIN
              </button>
              <button
                onClick={modalClose}
                className="loginbtn"
                type="submit"
              >
                DONT HAVE AN ACCOUNT?
              </button>
              <SignUp closeSignUp={() => setModalShow3(false)} show={modalShow3} onHide={handleClose} />
              <div _ngcontent-c1 className="id-join">
                <a
                  _ngcontent-c1
                  className="msgId"
                  href="https://wa.link/n8a7gq"
                >
                  <img
                    _ngcontent-c1
                    alt="whatsapp"
                    src={Whatsapp}
                    style={{ height: "28px" }}
                  />{" "}
                  Message For ID.
                </a>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Login;
