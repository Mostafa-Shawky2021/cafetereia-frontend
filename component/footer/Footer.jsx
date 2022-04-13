import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row footer-content">
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Discover</h2>
                <h5>
                  <a href="#">Our Team</a>
                </h5>
                <h5>
                  <a href="#">Branches</a>
                </h5>
                <h5>
                  {" "}
                  <a href="#">Delivery</a>
                </h5>
                <h5>
                  <a href="#">Terms and condition</a>
                </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Locations</h2>
                <h5>
                  <a href="#">Shebin</a>
                </h5>
                <h5>
                  <a href="#">Tanta</a>
                </h5>
                <h5>
                  {" "}
                  <a href="#">Cairo</a>
                </h5>
                <h5>
                  <a href="#">6 October</a>
                </h5>
                <h5>
                  <a href="#">Nasr city</a>
                </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Brands</h2>
                <h5>
                  <a href="#">Delta</a>
                </h5>
                <h5>
                  <a href="#">Kazion</a>
                </h5>
                <h5>
                  {" "}
                  <a href="#">Metro</a>
                </h5>
                <h5>
                  <a href="#">Galhoom</a>
                </h5>
                <h5>
                  <a href="#">Kher Baldna</a>
                </h5>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="footer-section links">
                <h2>Pages</h2>
                <h5>
                  <a href="/html/home.html">Home</a>
                </h5>
                <h5>
                  <a href="/html/about.html">Profile</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
        {/* copy right section */}
        <div className="footer-bottom">
          Copyright &copy; {`${date}`} All rights reserved{" "}
        </div>
      </footer>
    </>
  );
}
/*

*/
