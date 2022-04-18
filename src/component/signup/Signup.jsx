import "./signup.css";
import { useState, useEffect } from "react";
import validator from "validator";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Alert from "../alert/Alert";

import { signUpUser, updateProfileAvatar } from "../../api";
import useToken from "../../utils/hooks/useToken";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [passwordError, setPassError] = useState("");
  const [password, setPassword] = useState("");

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [showAlert, setShowAlert] = useState(false);
  const [firstTime, setFirstTime] = useState(true);
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [avatar, setAvatar] = useState(null);

  const { token, setToken } = useToken();

  const emailValidation = (mail) => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return !(!mail || regex.test(mail) === false);
  }
  const phoneValidator = (phone) => {
    const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    console.log("text ", regex.test(phone));
    return regex.test(phone);
  }
  useEffect(() => {
    !firstTime && !emailValidation(email) ? setEmailError('Email is not valid') : setEmailError('');
    setFirstTime(false);
  }, [email]);
  useEffect(() => {
    !firstTime && username.length < 3 ? setUsernameError('User Name must be at least 3 characters') : setUsernameError('');
    setFirstTime(false);
  }, [username]);

  useEffect(() => {
    !firstTime && password.length < 4 ? setPassError('Password must be at least 4 characters') : setPassError('');
    setFirstTime(false);
  }, [password]);


  useEffect(() => {
    !firstTime && !phoneValidator(phone) ? setPhoneError('InValid phone number') : setPhoneError('');

    setFirstTime(false);
  }, [phone]);

  let phoneChange = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
    if (phone.length < 11) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };
  let addressChange = (e) => {
    console.log(e.target.value);
    setAddress(e.target.value);
    if (address.length < 3) e.target.style = "border-color:#bc3942";
    else e.target.style = "border-color:#d8e2dc";
  };

  const onFileChange = (e) => {
    console.log(" On Change: ", e.target.files[0]);
    setAvatar(e.target.files[0]);
  };

  const uploadAvatar = (localToken) => {
    console.log("upadate avatar");
    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar);

      console.log(formData);
      const updateAvatarReq = async () => {
        await updateProfileAvatar(localToken, formData)
          .then((res) => {
            console.log(res.data);

            setAvatar(res.data.data.avatar);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      updateAvatarReq();
    }
  };

  let validateForm = () => {
    console.log(
      "username:" + username + " password: " + password + " Email : " + email
    );

    console.log(" validation data", firstTime);

    if (
      usernameError || emailError || passwordError || phoneError ||
      username.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      phone.length == 0
    ) {
      console.log("not valid data");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let v = validateForm();
    if (v) {
      console.log(username, password);
      await signUpUser({
        name: username,
        email,
        password,
        address,
        phone,
      })
        .then((res) => {
          console.log(res);
          if (res.data.token) {
            setToken(res.data.token);
            if (avatar) {
              uploadAvatar(res.data.token);
            }
            console.log("123");

            window.location.href = "/profile";
          } else {
            setShowAlert(true);
          }
        })
        .catch((err) => {
          setToken(null);
        });
    }
    else { setShowAlert(true); }
  };

  return (
    <>
      <Navbar />
      {
        showAlert && <div className="signup-error"> <Alert setShowAlert={setShowAlert} /> </div>
      }
      <div className="signup">
        <div className="container">
          <div className="row  g-0">
            <div className="col-5">
              <div className="image-section"></div>
            </div>
            <div className="col-5 m-5 p-4">
              <div className="signup-content">
                <p className="signup-text">Sign Up</p>
                <form onSubmit={handleSubmit}>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <label className="form-label" htmlFor="username">
                            Username
                          </label>
                        </td>
                        <td>
                          <input
                            id="username"
                            className="form-control form-input"
                            style={{ width: "250px" }}
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            onChange={e => setUsername(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <p style={{ color: "red", fontSize: 14 }}>

                            {usernameError}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className=" form-label" htmlFor="email">
                            Email
                          </label>
                        </td>
                        <td>
                          <input
                            id="email"
                            className="form-control"
                            style={{ width: "250px" }}
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            onChange={e => setEmail(e.target.value)}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>

                          <p style={{ color: "red", fontSize: 14 }}>{emailError}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div>
                            <label className="form-label" htmlFor="password">
                              Password
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-row">
                            <input
                              id="password"
                              className="form-control"
                              type="password"
                              name="password"
                              placeholder="Enter Password"
                              onChange={e => setPassword(e.target.value)}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>

                          <p style={{ color: "red", fontSize: 14 }}>{passwordError}</p>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <label className="form-label" htmlFor="phone">
                            Phone number
                          </label>
                        </td>

                        <td>
                          <div className="mb-3 input-container">
                            <input
                              id="phone"
                              className="form-control"
                              type="text"
                              name="phone"
                              placeholder="Enter Phone"
                              onChange={(e) => {
                                setPhone(e.target.value);
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <p style={{ color: "red", fontSize: 14 }}>

                            {phoneError}
                          </p>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <label className="form-label" htmlFor="photo">
                            photo
                          </label>
                        </td>
                        <td>
                          <div style={{ width: "250px" }}>
                            <input
                              className="form-control"
                              type="file"
                              name="avatar"
                              onChange={onFileChange}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="mb-3 input-container ">
                    <button className="btn btn-success ms-auto d-block " type="submit">
                      Signup
                    </button>
                  </div>
                  <p className="signin-Link">
                    Already have an account{" "}
                    <Link
                      to="/login"
                      style={{
                        color: "white",
                      }}
                    >
                      Log In
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

export default Signup;
