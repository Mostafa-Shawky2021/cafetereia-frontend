import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './categories.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
const Product = ()=> {
    return (
        <>
            <NavbarAdmin />
            <section className="categories">
                <div className="categories-container">
                    <Breadcrumb />
                    <div style={{textAlign:'right',marginBottom:'10px'}}>
                        <NavLink className="btn btn-primary add" to="/admin/addcategory"><i className="fa fa-plus me-2"></i>Add category</NavLink>
                    </div>
                    <Table striped bordered hover size="sm">
                        <thead>
                        <tr>
                            <th>Category</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>hotdrinks</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit</td>
                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a className="btn btn-info">edit</a>
                                <a className="btn btn-danger">delete</a>
                            </td>

                        </tr>
                        <tr>
                            <td>hotdrinks</td>
                            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </td>
                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a className="btn btn-info">edit</a>
                                <a className="btn btn-danger">delete</a>
                            </td>
                        </tr>

                        </tbody>
                    </Table>
                </div>
            </section>
        </>
    )

}   

export default Product;