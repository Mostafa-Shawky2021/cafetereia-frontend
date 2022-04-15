import "./orders.css";
import { useState } from "react";
import Navbar from '../navbar/Navbar';
import { Table } from "react-bootstrap";


const Orders = ()=> {
    return (
        <>
            <Navbar />
            <section className="orders">
            <div className="container-orders">
                <h2 className="title">My Orders</h2>
                <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>Order Date</th>
                                <th>Status</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>2021/05/03 12:10</td>
                                <td>Processing</td>
                                <td>Amount</td>
                                <td>Action</td>

                            </tr>
                          

                            </tbody>
                        </Table>
                </div>
            </section>
        </>

    )
};

export default Orders;