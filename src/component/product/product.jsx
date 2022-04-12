import Footer from "../footer/Footer";
import MainSection from "../mainsection/MainSection";
import { Navbar } from "../navbar/Navbar";

import { BoxLoading } from "react-loading";

import fruit from "../../assests/img/product-2-1.jpg";
import "./product.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductDataReq } from "../../api/product";
import { fetchSpecificUserData } from "../../api";

function Productt() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    const getProductData = async () => {
      await getProductDataReq(id)
        .then((res) => {
          console.log(res.data);
          setProduct(res.data.data);

          fetchSpecificUserData(res.data.data.owner).then((res2) => {
            console.log(res2.data);
            setOwner(res2.data.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getProductData();
  }, []);

  return (
    <>
      <Navbar />
      <MainSection />
      <section>
        <div className="container py-5">
          <div className="row">
            {!product ? (
              <BoxLoading />
            ) : (
              <>
                <div className="col-lg-4">
                  <div className="card mb-4">
                    <div className="card-body text-center">
                      <img
                        src={product.avatar || ""}
                        alt="avatar"
                        className="rounded-circle img-fluid"
                      />
                      <h5 className="my-3">Type: {product.title}</h5>
                      <p className="text-muted mb-1">Seller : {owner?.name}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Name</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{product.title}</p>
                        </div>
                      </div>
                      <hr />

                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0"> Price</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{product.price}$</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Address</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{owner?.address}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0"> Description </p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Productt;
