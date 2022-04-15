import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './users.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
const Users = ()=> {
    return (    
    <>
        <NavbarAdmin />
        <section className="users">
            <div className="container-user">
                <Breadcrumb />
                <div style={{textAlign:'right',marginBottom:'10px'}}>
                    <NavLink className="btn btn-primary add" to="/admin/adduser"><i className="fa fa-plus"></i>Add users</NavLink>
                </div>
                <h3 className="title">users</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>image</th>
                            <th>Room</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Samar</td>
                            <td>2021</td>

                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a class="btn btn-info">edit</a>
                                <a class="btn btn-danger">delete</a>
                            </td>
                     
                        </tr>
                        <tr>
                            <td>Bola</td>
                            <td>2021</td>
                            <td>
                                <img src={productImg}/>
                            </td>
                            <td>
                                <a class="btn btn-info">edit</a>
                                <a class="btn btn-danger">delete</a>
                            </td>
                        </tr>
                        <tr>
                            <td>Nehal</td>
                            <td>2021</td>
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
            </div>
        </section>
    </>
    )

}

export default Users;