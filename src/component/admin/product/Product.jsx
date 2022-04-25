import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import "./product.css";
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
import {
  changeProductStatus,
  getAllProds,
  deleteProduct,
  getCategories,
} from "../../../api/index2";
import { useEffect, useState } from "react";

import useToken from "../../../utils/hooks/useToken";
import Sidebar from "../sidebar/Sidebar";
import Tableofproducts from "./table/TableOfProducts";

const Product = () => {
  const { token } = useToken();
  const [allProds, setAllProds] = useState([]);
  const [allFiltered, setFiltered] = useState([]);
  const [allCats, setAllCats] = useState([]);

  useEffect(() => {
    getAllProducts();
    getAllCategories();
  }, []);

  const getAllProducts = async () => {
    await getAllProds(token)
      .then((res) => {
        console.log(res.data);
        setAllProds(res.data.response.result);
        setFiltered(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getAllCategories = async () => {
    await getCategories(token)
      .then((res) => {
        console.log(res.data);
        setAllCats(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const toggleStatus = async (id) => {
    const status = allProds.find((prod) => prod.id === id).status;

    await changeProductStatus(id, -status, token)
      .then((res) => {
        setAllProds(
          allProds.map((prod) => {
            if (prod.id === id) {
              prod.status = -prod.status;
            }
            return prod;
          })
        );
        setFiltered(
          allFiltered.map((prod) => {
            if (prod.id === id) {
              prod.status = -prod.status;
            }
            return prod;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteProductHandle = async (id) => {
    await deleteProduct(id, token)
      .then((res) => {
        setAllProds(allProds.filter((prod) => prod.id !== id));
        setFiltered(allFiltered.filter((prod) => prod.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    value? setFiltered(allProds.filter((prod) => prod.cat_id === value)) : setFiltered(allProds);
  };

  return (
    <>
      <NavbarAdmin />
      <section className="products-admin">
        <div className="container-products">
          <h3 className="title text-center">Products</h3>
          <div class="text-center" style={{ marginBottom: "10px" }}>
            <div class="row justify-content-center" style={{margin: 0}}>
              <div class="col-12 col-sm-4" style={{marginBottom: "5px"}}>
                  <select class="form-select" onChange={handleFilter} >
                    <option selected value="">All</option>
                    {
                      allCats.map((cat, index) => (
                        <option key={index} value={cat.id}>{cat.name}</option>
                      ))
                    }
                  </select>
              </div>
              <div class="col-12 col-sm-4">
                <NavLink className="btn btn-primary add d-block" to="/addproduct">
                  <i className="fa fa-plus"></i>Add product
                </NavLink>
              </div>
            </div>
            
          </div>
          
          <div className="row container-fluid" style={{margin: 0}}>
            <div className="col-12">
              <Tableofproducts allProds={allFiltered} toggleStatus={toggleStatus} deleteProductHandle={deleteProductHandle}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
