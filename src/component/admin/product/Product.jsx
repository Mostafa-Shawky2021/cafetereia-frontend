import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './product.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
const Product = ()=> {
    return (    
    <>
        <NavbarAdmin />
        <section className="products">
            <Container>
                <Breadcrumb />
                <div style={{textAlign:'right',marginBottom:'10px'}}>
                    <NavLink className="btn btn-primary" to="/admin/addproduct"><i className="fa fa-plus"></i>Add product</NavLink>
                </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>image</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>tea</td>
                            <td>25$</td>
                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a class="btn btn-info">edit</a>
                                <a class="btn btn-danger">delete</a>
                            </td>
                     
                        </tr>
                        <tr>
                            <td>tea</td>
                            <td>25$</td>
                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a class="btn btn-info">edit</a>
                                <a class="btn btn-danger">delete</a>
                            </td>
                        </tr>
                       
                    </tbody>
                </Table>
            </Container>
        </section>
    </>
    )

}

export default Product;