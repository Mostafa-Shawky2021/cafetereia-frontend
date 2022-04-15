import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { loginUser } from "../../api";
import Alert from "../alert/Alert";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Login({ setToken }) {
  console.log("login");
  const [showAlert, setShowAlert] = useState(false);
  let [email, uname, password] = ["", "", ""];
  const [unameError, setUnameError] = useState("");
  const [passError, setPassError] = useState("");
  let unameChange = (e) => {
    console.log(e.target.value);
    uname = e.target.value;
    if (uname.length < 3) e.target.style = "border-color:red;shadow-radius:0px";
    else e.target.style = "border-color:#fffee9 ; shadow-radius:0px;";
  };
  let passwordChange = (e) => {
    password = e.target.value;
    if (password.length < 6) {
      e.target.style = "border-color:red";
    } else e.target.style = "border-color:#fffee9";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      console.log(uname, password);
      await loginUser({
        email: uname,
        password,
      })
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            setToken(res.data.token);
            console.log("123");
            window.location.href = "/profile";
          } else {
            setShowAlert(true);
          }
        })
        .catch((err) => {
          setToken(null);
        });
    } else {
      if (uname.length < 3) setUnameError("{Username must be >=3}");
      else setUnameError("");
      if (password.length < 6) setPassError("{Password must be >6}");
      else setPassError("");
    }
  };
  function isValid() {
    if (uname.length < 3 || password.length < 6) {
      return false;
    }
    setUnameError("");
    setPassError("");
    return true;
  }

  return (
    <>
      {showAlert && <Alert setShowAlert={setShowAlert} />}
      <Navbar />

      <div className="login">
        <div className="container">
          <div className="row  g-0">
            <div className="col-5">
              <div className="image-section"></div>
            </div>
            <div className="col-7">
              <div className="login-content">
                <p className="login-text">Log In</p>
                <form
                  onSubmit={handleSubmit}
                  className=" needs-validation"
                  novalidate
                >
                  <div className="mb-3 input-container">
                    <div>
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>

                      <p>
                        <span style={{ color: "white", fontSize: 14 }}>
                          {" "}
                          {unameError}
                        </span>
                      </p>
                    </div>
                    <input
                      id="username"
                      type="text"
                      className="form-control "
                      required
                      name="username"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        unameChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container">
                    <p>
                      <span style={{ color: "white", fontSize: 14 }}>
                        {" "}
                        {passError}
                      </span>
                    </p>

                    <label className="form-label" htmlFor="password">
                      Password
                    </label>

                    <input
                      id="password"
                      className="form-control "
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      required
                      onChange={(e) => {
                        passwordChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container ">
                    <button className="btn  ms-auto d-block ">login</button>
                  </div>
                  <p className="signup-Link ">
                    Don't have an account
                    <Link to="/signup" style={{ color: "white" }}>
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
