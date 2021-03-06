import "./login.css";

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { loginUser } from "../../api/index2";
import useToken from "../../utils/hooks/useToken";
import useIsAdmin from "../../utils/hooks/useIsAdmin";

import Alert from "../alert/Alert";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Login() {

  const {setToken} = useToken();
  //TODO:: Remove it later
  const {setIsAdmin} = useIsAdmin();  // for deployment reasons

  const [firstTime, setFirstTime] = useState(true);

  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState('');
  const [passError, setPassError] = useState('');

  const emailValidation = (mail) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!mail || regex.test(mail) === false);
  }

  useEffect(() => {
    !firstTime && !emailValidation(email) ? setEmailError('Email is not valid') : setEmailError('');
    setFirstTime(false);
  }, [email]);

  useEffect(() => {
    !firstTime && password.length < 4 ? setPassError('Password must be at least 4 characters') : setPassError('');
    setFirstTime(false);
  }, [password]);

  function isValid() {
    if (!emailValidation(email) || password.length < 4) {
      return false;
    }
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      setShowLoading(true); // Loading Start
      await loginUser({ email, pass: password })
        .then((res) => {
          setShowLoading(false); // Loading End
          // console.log(res.data);

          // console.log(res.data);
          console.log(res.data);
          if (res.data.response.result.token) {
            console.log(res.data.response);
            setToken(res.data.response.result.token);
            setIsAdmin(res.data.response.result.role);
            console.log("123");
            window.location.href = "/";
          } else {
            setShowAlert(true);
          }
        })
        .catch((err) => {
          setShowLoading(false); // Loading End
          setToken(null);
        });
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      {/* <Navbar /> */}
      {
        showAlert && <div className="login-error"> <Alert setShowAlert={setShowAlert} /> </div>
      }
      {
        showLoading && <div id="wrapper">

          <div className="profile-main-loader">
            <div className="loader">
              <svg className="circular-loader" viewBox="25 25 50 50" >
                <circle className="loader-path" cx="50" cy="50" r="20" fill="none" stroke="#70c542" strokeWidth="2" />
              </svg>
            </div>
          </div>

        </div>
      }
      <div className="login" >
        <div className="container">
          <div className="row">
            <div className=" d-none d-lg-block col-lg-6">
              <div className="image-section"></div>
            </div>
            <div className="col-12  col-md-10 col-lg-6 m-auto ">
              <div className="login-content">
                <p className="login-text">Log In</p>
                <form onSubmit={handleSubmit} className=" needs-validation" noValidate>
                  <div className="mb-3 input-container">
                    <div>
                      <label className="form-label" htmlFor="username"> Email Address </label>
                    </div>
                    <input
                      id="Email"
                      type="text"
                      className="form-control "
                      required
                      name="username"
                      value={email}
                      placeholder="Enter Email"
                      onChange={e => setEmail(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: 14 }}> {emailError} </p>

                  </div>
                  <div className="mb-3 input-container">
                    <label className="form-label" htmlFor="password"> Password </label>
                    <input
                      id="password"
                      type="password" className="form-control "
                      required
                      name="password"
                      value={password}
                      placeholder="Enter password"
                      onChange={e => setPassword(e.target.value)}
                    />
                    <p style={{ color: "red", fontSize: 14 }}> {passError} </p>
                  </div>
                  <div className="mb-3 input-container ">
                    <button className="btn  ms-auto d-block ">login</button>
                  </div>
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
