import { Container, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import './orders.css';
import productImg from "../../../assests/img/product.jpg";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { NavLink } from "react-router-dom";
const Orders = ()=> {
    return (    
    <>
        <NavbarAdmin />
        <section className="orders">
            <div className="container-orders">
                <Breadcrumb />
                <div style={{textAlign:'right',marginBottom:'10px'}}>
                </div>
                <h3 className="title">Orders</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Order Date</th>
                            <th>Name</th>
                            <th>Room</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2021/02/3 10.00AM</td>
                            <td>Ahmed Mohamed</td>
                            <td>2000</td>
                            <td>25$</td>
                            <td>Deliver</td>
                        </tr>
                        <tr>
                            <td>2021/02/3 10.00AM</td>
                            <td>Aya Mohamed</td>
                            <td>2000</td>
                            <td>25$</td>
                            <td>Deliver</td>
                        
                        </tr>
                       
                    </tbody>
                </Table>
            </div>
        </section>
    </>
    )

}

export default Orders;