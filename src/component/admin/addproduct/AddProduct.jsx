import { Container } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useState } from "react";
import "./addproduct.css";
const AddProduct = () => {
    const [producterr, setProductmsg ] = useState("");
    const [priceerr, setPricemsg ] = useState("") ;
    const [cateogryerr, setCatmsg] = useState("");
    let alphadigit = /^[A-z0-9\s]+$/;
    let digit = /^[0-9]+$/;

    const handleProduct = (event)=> {
        if( ! event.target.value.match(alphadigit)   ) {
            setProductmsg('sorry product name is required and must be valid');


        } else {
            setProductmsg("");
        }
    }
    const handlePrice = (event)=> {
        console.log(event);
        if( !event.target.value.match(digit) ) {
            setPricemsg('sorry price is required and must contain digit only');


      ;
        } else {
            setPricemsg("");
        }
    }
    const handleCat = (event) => {
        if( ! event.target.value.match(alphadigit)   ) {
            setCatmsg('sorry product name is required and must be valid');


        } else {
            setCatmsg("");

        }
    }
    const handleSubmit = (e) => {

        e.preventDefault();
    }
    return (
        <>
            <NavbarAdmin />
            <section className="add-product">
                <div className="container-addproduct">
                    <Breadcrumb />
                    <form className="form">
                        <div className="row mb-3">
                            <label for="inputEmail3" class="col-sm-2 col-form-label">Product name</label>
                            <div className="col-sm-10 form-group">
                                <input type="text" class="form-control" id="inputEmail3" placeholder="product name" onChange={handleProduct}/>  
                                <span className="error">{producterr}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="price" class="col-sm-2 col-form-label">Price</label>
                            <div className="col-sm-10">
                                <input type="number" className="form-control" id="price" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="cateogry" className="col-sm-2 col-form-label">Cateogry</label>
                            <div className="col-sm-10 form-group">
                            <select className="form-select" id="cateogry" onChange={handleCat}>
                                    <option value="">...</option>
                                    <option value="icecream">iceream</option>
                                    <option value="hotdrink">hotdrink</option>
                                </select>
                                <span className="error">{cateogryerr}</span>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label for="cateogry " className="col-sm-2 col-form-label">Picture</label>
                            <div className="col-sm-10 form-group">
                                <div className="custom-file">
                                    <span>choose file</span>
                                    <input type="file" />
                                </div>
                            </div>
                        </div>
                    <div style={{textAlign:'right'}}>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}><i className="fa fa-plus"></i> Add product</button>
                    </div>
                    </form>
                </div>
            </section>  
        </>

    );
}

export default AddProduct;