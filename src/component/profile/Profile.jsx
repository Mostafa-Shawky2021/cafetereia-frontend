import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BoxLoading } from "react-loading";
import "../product/product.css";

import { fetchUserData, updateProfileAvatar } from "../../api";
import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";

import useToken from "../../utils/hooks/useToken";
import { Form } from "react-bootstrap";

export default function Profile() {
  const { token } = useToken();

  const [userData, setUserData] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [avatarShown, setAvatarShown] = useState(null);

  useEffect(() => {
    const getData = async () => {
      await fetchUserData(token)
        .then((res) => {
          if (res.data.data) {
            console.log(res);
            setUserData(res.data.data);
            setAvatar(res.data.data.avatar)
            setAvatarShown(res.data.data.avatar)
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
    console.log(userData);
  }, []);

  const updateAvatar = () => {
    console.log("upadate avatar");
    if (avatar) {
      const formData = new FormData();
      formData.append("avatar", avatar);

      console.log(formData);
      const updateAvatarReq = async () => {
        await updateProfileAvatar(token, formData)
          .then((res) => {
            setAvatarShown(res.data.data.avatar)

            console.log(res.data.data.avatar);
          })
          .catch((err) => {
            console.log(err);
          });
      }
      updateAvatarReq();
    }
  }

  return (
    <>
      <Navbar />
      <MainSection />
      <section>
        <div className="container py-5" style={{ position: "relative" }}>
          {!userData ? (
            <BoxLoading />
            // <div></div>
          ) : (
            <div className="row">
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      src={avatarShown}
                      alt="avatar"
                      className="rounded-circle img-fluid"
                    />
                    <h5 className="my-3">{userData.name}</h5>
                    <p className="text-muted mb-1">Seller</p>
                    <p className="text-muted mb-4">
                      {userData.address || null}
                    </p>
                    <Form.Group controlId="formFileSm" className="mb-3">
                      <Form.Label>Select Image</Form.Label>
                      <Form.Control type="file" name="avatar" size="sm" onChange={(e) => setAvatar(e.target.files[0])} />
                      <div className="input-group-append mt-3">
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04" onClick={updateAvatar}>Submit</button>
                      </div>
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0"> Name</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {userData.name || null}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Email</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {userData.email || null}
                        </p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Phone</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {userData.phone || null}
                        </p>
                      </div>
                    </div>
                    <hr />

                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">Address</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          {userData.address || null}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
