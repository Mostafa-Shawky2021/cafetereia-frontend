import { Table } from "react-bootstrap";
import NavbarAdmin from "../navbar/NavbarAdmin";
import "./orders.css";
import Breadcrumb from "../breadcrumb/Breadcrumb";

import useToken from "../../../utils/hooks/useToken";
import {
  changeOrderStatusAPI,
  getOrderProductsOfOrder,
  getOrdersWithClientNameAPI,
} from "../../../api/index2";
import { useEffect, useState } from "react";
import ProductArea from "../../orders/productArea/ProductArea";

const OrdersAdmin = () => {
  const { token } = useToken();
  const [orders, setOrders] = useState([]);
  const [orderProducts, setOrderProducts] = useState([]);


  useEffect(() => {
    getOrdersWithClientName();
  }, []);

  const getOrdersWithClientName = async () => {
    await getOrdersWithClientNameAPI(token)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data.response.result);
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
              order.status = status;
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavbarAdmin />
      <section className="orders">
        <div className="container-orders">
          <Breadcrumb />
          <div style={{ textAlign: "right", marginBottom: "10px" }}></div>
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
              {orders.map((order, index) => (
                <tr key={index} onClick={() => getProdsOrder(order.id)}>
                  <td>{order.date}</td>
                  <td>{order.name}</td>
                  <td>
                    {order.status === 0
                      ? "Not Yet"
                      : order.status === 1
                      ? "Processing"
                      : "Delivered"}
                  </td>
                  <td>{order.price}</td>
                  <td>
                    {order.status === 0 ? (
                      <button onClick={() => changeOrderStatus(order.id, 1)}>
                        Process
                      </button>
                    ) : order.status === 1 ? (
                      <button onClick={() => changeOrderStatus(order.id, 2)}>
                        Deliver
                      </button>
                    ) : (
                      <span>Delivered</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ProductArea prods={orderProducts}/>
        </div>
      </section>
    </>
  );
};

export default OrdersAdmin;
