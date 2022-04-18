import { Container } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useEffect, useState } from "react";
import { useParams, useNavigate  } from "react-router-dom";
import "./addproduct.css";
import { addProduct, getCategories, getLastProd, getProductById, updateProduct, updateProductAvatar } from "../../../api/index2";
import Alert from "../../alert/Alert";

import useToken from "../../../utils/hooks/useToken";


const AddProduct = ({prod}) => {

    const { token } = useToken();
    const {prodId} = useParams();
    let navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const [categories, setCategories] = useState([]);

    const [nameInput, setNameInput] = useState("");
    const [priceInput, setPriceInput] = useState(0);
    const [catInput, setCatInput] = useState(0);
    const [avatar, setAvatar] = useState({});

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

            setShowLoading(false);
        })
    }

    useEffect(() => {
        if(prodId) {
            setShowLoading(true);
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

    const updateTheLastProduct = async () => {
        await getLastProd(token)
            .then((res) => {
                console.log(res.data);
                uploadTheAvatar(res.data.response.result.id);
            }).catch((err) => {
                console.log(err);
            }
        )
    }

    const addProd = async (data) => {
        await addProduct(data, token)
        .then((res) => {
            console.log(res.data);
            if(avatar){
                updateTheLastProduct();
            } else {
                setShowLoading(false);
            }
        })
        .catch((err) => {
            console.log(err);
            setShowLoading(false);
        })
    }

    const uploadTheAvatar = async (id) => {
        const formData = new FormData();
        formData.append("avatar", avatar);
        await updateProductAvatar(id, formData, token)
        .then((res) => {
            console.log(res.data);
            setShowLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setShowLoading(false);
        })
    }

    const updateProd = async (data) => {
        await updateProduct(data, token)
        .then((res) => {
            console.log(res.data);
            console.log(avatar);
            if(avatar) {
                uploadTheAvatar(prodId);
            }
            setShowLoading(false);
        })
        .catch((err) => {
            console.log(err);
            setShowLoading(false);
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if(producterr || priceerr || cateogryerr) {
            setShowAlert(true);
        } else {
            setShowLoading(false);

            const data = {
                name: nameInput,
                price: priceInput,
                cat_id: catInput
            }
            if(prodId) {
                console.log("update");
                data.id = prodId;
                updateProd(data);
            } else {
                console.log("add");
                addProd(data);
            }
            navigate('/products');

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
                                    <input type="file" name="image" onChange={(e)=>setAvatar(e.target.files[0])} />
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