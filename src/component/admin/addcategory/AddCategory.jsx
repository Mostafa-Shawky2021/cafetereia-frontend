import { Container } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import {useState} from 'react';
import  "./addcategory.css";
const AddCategory = () =>{

    return (
        <>
        <NavbarAdmin />
        <section className="add-category">
            <div className="container-addcategory">
                <Breadcrumb  />
                <form className="form">
                    <div class="row mb-4 ">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">name</label>
                        <div class="col-sm-10 form-group">
                            <input type="text" class="form-control" id="inputEmail3" placeholder="Category name" />
                            <span class="error"></span>
                            <i className="fa fa-asterisk"></i>
                        </div>
                    </div>
                    <div className="row mb-4 ">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Description</label>
                        <div className="col-sm-10 form-group">
                            <textarea type="text" className="form-control" id="inputEmail3"></textarea>
                            <span className="error"></span>
                        </div>
                    </div>
                    <div class="row mb-4 ">
                        <label for="cateogry" class="col-sm-2 col-form-label">Picture</label>
                        <div class="col-sm-10  form-group">
                            <div class="custom-file">
                                <span>choose file</span>
                                <input type="file"/>
                            </div>
                        </div>
                    </div>
                    <div style={{textAlign:'right'}}>
                        <button type="submit" class="btn btn-primary">Add product</button>
                    </div>
                </form>
            </div>
        </section>
        </>

    );
}

export default AddCategory;