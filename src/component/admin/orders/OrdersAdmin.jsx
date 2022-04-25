import { Button, Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import "./orders.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import useToken from "../../../utils/hooks/useToken";
import {
  changeOrderStatusAPI,
  getAllUsers,
  getOrderProductsOfOrder,
  getOrdersWithClientNameAPI,
} from "../../../api/index2";
import { useEffect, useState } from "react";
import ProductArea from "../../orders/productArea/ProductArea";
import ShowOrderDetails from "./showOrderDetails/ShowOrderDetails";

const OrdersAdmin = () => {
  const { token } = useToken();
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ordersFiltered, setOrdersFiltered] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getOrdersWithClientName();
    getAllUsersSelect();
  }, []);

  const getAllUsersSelect = () => {
    getAllUsers(token)
      .then((res) => {
        console.log(res.data);
        setUsers(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const getOrdersWithClientName = async () => {
    await getOrdersWithClientNameAPI(token)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.response.result);
        setOrdersFiltered(res.data.response.result);

      })
      .catch((err) => {
        console.log(err);
      });
    console.log("end Get All Users");
  };

  const changeOrderStatus = async (id, status) => {
    await changeOrderStatusAPI(id, status, token)
      .then((res) => {
        setOrders(
          orders.map((order) => {
            if (order.id === id) {
              order.status = status+"";
            }
            return order;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProdsOrder = async (id) => {
    await getOrderProductsOfOrder(id, token)
      .then((res) => {
        console.log(res.data);
        setOrderProducts(res.data.response.result);
        setShow(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    value? setOrdersFiltered(orders.filter((order) => order.customer_id === value)) : setOrdersFiltered(orders);
  };

  return (
    <>
      <NavbarAdmin />
      <section className="orders">
        <div className="container-orders">
          <div style={{ textAlign: "right", marginBottom: "10px" }}>
            <h3 className="title text-center">Orders</h3>
            <div class="text-center" style={{ marginBottom: "10px" }}>
              <div class="row justify-content-center" style={{margin: 0}}>
                <div class="col-12 col-sm-4" style={{marginBottom: "5px"}}>
                    <select class="form-select" onChange={handleFilter} >
                      <option selected value="">All</option>
                      {
                        users.map((user, index) => (
                          <option key={index} value={user.id}>{user.name}</option>
                        ))
                      }
                    </select>
                </div>
              </div>
            </div>
          </div>
          <ShowOrderDetails show={show} setShow={setShow} prods={orderProducts}/>

          <Table striped bordered hover size="sm" className="table">
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
              {ordersFiltered.length? ordersFiltered.map((order, index) => (
                <tr key={index} onClick={() => getProdsOrder(order.id)}>
                  <td>{order.date}</td>
                  <td>{order.name}</td>
                  <td>
                    {order.status === "0"
                      ? "Not Yet"
                      : order.status === "1"
                      ? "Processing"
                      : "Delivered"}
                  </td>
                  <td>{order.price}</td>
                  <td>
                    {order.status === "0" ? (
                      <Button onClick={() => changeOrderStatus(order.id, 1)} variant="warning">Process</Button>
                    ) : order.status === "1" ? (
                      <Button onClick={() => changeOrderStatus(order.id, 2)} variant="success">Deliver</Button>
                    ) : (
                      <span className="orderspan">Delivered</span>
                    )}
                  </td>
                </tr>
              )): <tr><td colSpan="5">
                <h3 className='text-center' style={{ margin: "40px auto", color: "#BBB"}}>There is No Products At This Order</h3>  
              </td></tr>
              
              }
            </tbody>
              
          </Table>
          {/* <ProductArea prods={orderProducts} /> */}
        </div>
      </section>
    </>
  );
};

export default OrdersAdmin;
