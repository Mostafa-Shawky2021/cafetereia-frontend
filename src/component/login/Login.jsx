import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { loginUser } from "../../api";
import Alert from "../alert/Alert";

function Login({ setToken }) {
  console.log("login");
  // let [username, password] = ["", "", ""];
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  let usernameChange = (e) => {
    console.log(e.target.value);
    setUserName(e.target.value);
    if (username.length < 3) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let passwordChange = (e) => {
    setPassword(e.target.value);
    if (password.length < 8) {
      e.target.style = "border-color:#bc3942";
    } else e.target.style = "border-color:#d8e2dc";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(username, password);
    await loginUser({
      email: username,
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
  };

  return (
    <>
      {
        showAlert && <Alert setShowAlert={setShowAlert} />
      }

      <div className="login" >
        <div className="container">
          <div className="row  g-0">
            <div className="col-5">
              <div className="image-section"></div>
            </div>
            <div className="col-7">
              <div className="login-content">
                <p className="login-text">Log In</p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3 input-container">
                    <label className="form-label" htmlFor="username">
                      Username
                    </label>
                    <input
                      id="username"
                      className="form-control"
                      type="text"
                      name="username"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        usernameChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container">
                    <label className="form-label" htmlFor="password">
                      Password
                    </label>
                    <input
                      id="password"
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      onChange={(e) => {
                        passwordChange(e);
                      }}
                    />
                  </div>
                  <div className="mb-3 input-container ">
                    <button className="btn btn-success ms-auto d-block ">
                      login
                    </button>
                  </div>
                  <p className="signup-Link ">
                    Don't have an account
                    <Link to="/signup" style={{ color: "white" }} >
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
