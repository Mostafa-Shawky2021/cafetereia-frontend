import "./adduser.css";
import NavbarAdmin from "../navbar/NavbarAdmin";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import useToken from "../../../utils/hooks/useToken";
import {
  addUserAPI,
  getLastUser,
  getUserById,
  updateUserAPI,
  updateUserAvatar,
} from "../../../api/userAPI";
import { useParams } from "react-router-dom";

import Alert from "../../alert/Alert";

const AddUser = () => {
  const { token } = useToken();
  const { userId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [confirmPassErr, setConfirmPassErr] = useState("");

  const [avatar, setAvatar] = useState({});

  const [showAlert, setShowAlert] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("All Fields must be valid!");

  useEffect(() => {
    if (userId) {
      setShowLoading(true);
      getUser(userId);
    }
  }, []);

  let validPattern = {
    alpha: /^[A-z\s]+$/g,
    email:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  };

  useEffect(() => {
    if (name.length === 0) {
      setNameErr("Name is required");
    } else if (!name.match(validPattern.alpha)) {
      setNameErr("Name should contain only alphabets");
    } else {
      setNameErr("");
    }
  }, [name]);

  useEffect(() => {
    if (email.length === 0) {
      setEmailErr("Email is required");
    } else if (!email.match(validPattern.email)) {
      setEmailErr("Email is not valid");
    } else {
      setEmailErr("");
    }
  }, [email]);

  useEffect(() => {
    if (password.length === 0) {
      setPasswordErr("Password is required");
    } else if (password.length < 6) {
      setPasswordErr("Password should be atleast 6 characters");
    } else {
      setPasswordErr("");
    }
  }, [password]);

  useEffect(() => {
    if (confirmPass.length === 0) {
      setConfirmPassErr("Confirm Password is required");
    } else if (confirmPass !== password) {
      setConfirmPassErr("Password and Confirm Password should be same");
    } else {
      setConfirmPassErr("");
    }
  }, [confirmPass]);

  const getUser = async (id) => {
    await getUserById(id, token).then((res) => {
      console.log(res.data);
      if (res.data.response.status === 200) {
        setName(res.data.response.result.name);
        setEmail(res.data.response.result.email);
        console.log(res.data.response.result.cat_id);
      }

      setShowLoading(false);
    });
  };

  const updateUser = async (data) => {
    await updateUserAPI(data, token)
      .then((res) => {
        console.log(res.data);
        console.log(avatar);
        if (avatar.name) {
          uploadTheAvatar(userId);
        } else {
          setShowLoading(false);
        }
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addUser = async (data) => {
    console.log(data);
    await addUserAPI(data, token)
      .then((res) => {
        console.log(res.data);
        if (res.data.response.status !== 200) {
          setErrorMessage("Email already exists!");
          setShowLoading(false);
          setShowAlert(true);
        } else {
          if (avatar.name) {
            updateTheLastUser();
          } else {
            setShowLoading(false);
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setShowLoading(false);
      });
  };

  const updateTheLastUser = async () => {
    await getLastUser(token)
      .then((res) => {
        console.log(res.data);
        if (res.data.response.status === 200) {
          uploadTheAvatar(res.data.response.result.id);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadTheAvatar = async (id) => {
    const formData = new FormData();
    formData.append("avatar", avatar);
    await updateUserAvatar(id, formData, token)
    
      .then((res) => {
        console.log(res.data);
        
        setShowLoading(false);
        window.location.href = "/users";
      
      })
      .catch((err) => {
        console.log(err);
        setShowLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nameErr || emailErr || passwordErr || confirmPassErr) {
      setShowAlert(true);
    } else {
      setShowLoading(true);

      const data = {
        name: name,
        email: email,
        pass: password,
      };
      if (userId) {
        console.log("update");
        data.id = userId;
        updateUser(data)
      } else {
        console.log("add");
        addUser(data)
      }
      // navigate('/products');
      // window.location.href = "/users";
    }
  };

  return (
    <>
      <NavbarAdmin />

      {showAlert && (
        <div className="addproduct-error">
          {" "}
          <Alert setShowAlert={setShowAlert} message={errorMessage} />{" "}
        </div>
      )}
      {showLoading && (
        <div id="wrapper">
          <div className="profile-main-loader">
            <div className="loader">
              <svg className="circular-loader" viewBox="25 25 50 50">
                <circle
                  className="loader-path"
                  cx="50"
                  cy="50"
                  r="20"
                  fill="none"
                  stroke="#70c542"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
      <section className="adduser">
        <div className="container-adduser">
          <form className="form">
            <div className="row mb-3">
              <label for="inputEmail3" className="col-sm-2 col-form-label">
                Name
              </label>
              <div className="col-sm-10 form-group">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="username"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="error">{nameErr}</span>
                <i className="fa fa-asterisk"></i>
              </div>
            </div>
            <div className="row mb-3">
              <label for="email" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10 form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="error">{emailErr}</span>
                <i className="fa fa-asterisk"></i>
              </div>
            </div>
            <div className="row mb-3">
              <label for="password" className="col-sm-2 col-form-label">
                Password
              </label>
              <div className="col-sm-10 form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                />
                <span className="error">{passwordErr}</span>
                <i className="fa fa-asterisk"></i>
              </div>
            </div>
            <div className="row mb-3">
              <label for="confirmPassword" className="col-sm-2 col-form-label">
                Confirm Pass
              </label>
              <div className="col-sm-10 form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="confirmPassword"
                  onChange={(e) => setConfirmPass(e.target.value)}
                  placeholder="confirm password"
                />
                <span className="error">{confirmPassErr}</span>
                <i className="fa fa-asterisk"></i>
              </div>
            </div>
            <div className="row mb-3">
              <label for="cateogry " className="col-sm-2 col-form-label">
                Picture
              </label>
              <div className="col-sm-10 form-group">
                <div className="custom-file">
                  <span>choose file</span>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setAvatar(e.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                <i className="fa fa-plus"></i> {userId ? "Update" : "Add"} User
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default AddUser;
