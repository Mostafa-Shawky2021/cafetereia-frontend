import { Container } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./addproduct.css";
import { getCategories, getProductById } from "../../../api/index2";
import Alert from "../../alert/Alert";

import useToken from "../../../utils/hooks/useToken";


const AddProduct = ({prod}) => {

    const { token } = useToken();
    const {prodId} = useParams();
    const [showAlert, setShowAlert] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const [categories, setCategories] = useState([]);

    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState(0);
    const [catInput, setCatInput] = useState(0);

    const [producterr, setProductmsg ] = useState("");
    const [priceerr, setPricemsg ] = useState("") ;
    const [cateogryerr, setCatmsg] = useState("");

    let alphadigit = /^[A-z0-9\s]+$/;
    let digit = /^[0-9]+$/;

    const getAllCategories = async () => {
        await getCategories()
        .then((res) => {
            console.log(res.data);
            setCategories(res.data.response.result);
        })
        .catch((err) => {
            console.log(err);
        })
    }

    const getProduct = async (id) => {
        await getProductById(id, token)
        .then((res) => {
            console.log(res.data);
            setNameInput(res.data.response.result.name);
            setPriceInput(res.data.response.result.price);
            setCatInput(res.data.response.result.cat_id);
            console.log(res.data.response.result.cat_id);
        })
    }

    useEffect(() => {
        if(prodId) {
            getProduct(prodId);
        }
        getAllCategories();
    }, []);

    useEffect(() => {
        if(nameInput.length === 0) {
            setProductmsg("Product name is required");
        } else if(!alphadigit.test(nameInput.trim())) {
            setProductmsg("Product name must be alphanumeric");
        } else {
            setProductmsg("");
        }
    }, [nameInput]);

    useEffect(() => {
        if(priceInput.length === 0) {
            setPricemsg("Price is required");
        } else if(!digit.test(priceInput)) {
            setPricemsg("Price must be numeric");
        } else {
            setPricemsg("");
        }
    }, [priceInput]);

    useEffect(() => {
        console.log(catInput);
        if(catInput == 0) {
            setCatmsg("Category is required");
        } else {
            setCatmsg("");
        }
    }, [catInput]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(nameInput.length === 0 || !alphadigit.test( nameInput.trim())) {
            setProductmsg("Product name is required");
            setShowAlert(true);
        } else if(priceInput.length === 0 || !digit.test(priceInput)) {
            setPricemsg("Price is required");
            setShowAlert(true);
        } else if(catInput === 0) {
            setCatmsg("Category is required");
            setShowAlert(true);
        } else {
            setShowLoading(false);
            setShowAlert(true);

            if(prodId) {
                console.log("update");
            } else {
                console.log("add");
            }

        }
    }

    return (
        <>
            <NavbarAdmin />
            {
                showAlert && <div className="addproduct-error"> <Alert setShowAlert={setShowAlert} message="All Fields must be valid!" /> </div>
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
            <section className="add-product">
                <div className="container-addproduct">
                    <Breadcrumb />
                    <form className="form">
                        <div className="row mb-3">
                            <label htmlFor="name" className="col-sm-2 col-form-label">Product name</label>
                            <div className="col-sm-10 form-group">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name"
                                    placeholder="product name" 
                                    value={nameInput} 
                                    onChange={(e)=>setNameInput(e.target.value)}
                                />  
                            </div>
                            <div className="error text-center" style={{color: "red"}}>{producterr}</div>
                        </div>
                        <div className="row mb-3">
                            <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    id="price" 
                                    value={priceInput} 
                                    onChange={(e)=>setPriceInput(e.target.value)} 
                                />
                            </div>
                            <div className="error text-center" style={{color: "red"}}>{priceerr}</div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="cateogry" className="col-sm-2 col-form-label">Cateogry</label>
                            <div className="col-sm-10 form-group">
                            <select className="form-select" id="cateogry" onChange={(e)=>setCatInput(e.target.value)}>
                                    <option value="0">Select</option>
                                    {
                                        categories.map((cat, index) => {
                                            return (
                                                <option 
                                                    key={index} 
                                                    value={cat.id}
                                                    {...(catInput === cat.id) && {selected: true}}
                                                    >{cat.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div className="error text-center" style={{color: "red"}}>{cateogryerr}</div>
                        </div>

                        <div className="row mb-3">
                            <label htmlFor="cateogry " className="col-sm-2 col-form-label">Picture</label>
                            <div className="col-sm-10 form-group">
                                <div className="custom-file">
                                    <span>choose file</span>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    <div style={{textAlign:'right'}}>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}><i className="fa fa-plus"></i> {prodId? 'Update' : 'Add'} product</button>
                    </div>
                    </form>
                </div>
            </section>  
        </>

    );
}

export default AddProduct;