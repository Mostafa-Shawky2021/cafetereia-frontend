import "./orders.css";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Table } from "react-bootstrap";
import Footer from "../footer/Footer";
// import OrderCard from "./orderCard/OrderCard";

import useToken from "../../utils/hooks/useIsAdmin";
import { verifyClientRole, getUserOrders, cancelOrder, getOrderProductsOfOrder } from "../../api/index2";
import ProductArea from "./productArea/ProductArea";

const Orders = () => {

  const { token } = useToken();
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [orderProducts, setOrderProducts] = useState([]);

  useEffect(() => {
    getMyData();
  }, []);

  const getMyData = async () => {
    await verifyClientRole(token)
    .then((res) => {
        console.log(res.data.response.result);
        // setMyData(res.data.response.result);
        getOrders(res.data.response.result.id);
    })
    .catch((err) => {
        console.log(err);
    })
}

  const getOrders = async (id) => {
    await getUserOrders(id, token)
    .then((res) => {
      setOrders(res.data.response.result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const cancelOrderHandle = async (id) => {
    await cancelOrder(id, token)
    .then((res) => {
      setOrders(orders.filter(ord => ord.id !== id));
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const getProdsOrder = async (id) => {
    await getOrderProductsOfOrder(id, token)
    .then((res) => {
      console.log(res.data);
      setOrderProducts(res.data.response.result);
    })
    .catch((err) => {
      console.log(err);
    })
  }

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
              {
                orders.map((order, index) => (
                  <tr key={index} onClick={() => getProdsOrder(order.id)}>
                    <td>{order.date}</td>
                    <td>{order.status == 0? 'Not Yet' : order.status == 1? 'Processing': 'Delivered'}</td>
                    <td>{order.price}</td>
                    <td>{order.status == 0? <button onClick={() => cancelOrderHandle(order.id)}>Cancel</button> : ''}</td>
                  </tr>
                ))
              }
              {/* <tr>
                <td>2021/05/03 12:10</td>
                <td>Success</td>
                <td>1</td>
                <td>Action</td>
              </tr>
              <tr>
                <td style={{ border: "none", width: "20px" }}>
                  <OrderCard />
                </td>
              </tr>
              <tr>
                <td>2021/05/03 12:10</td>
                <td>Failed</td>
                <td>4</td>
                <td>Action</td>
              </tr>
              <tr>
                <td style={{ border: "none", width: "20px" }}>
                  <OrderCard />
                </td>
                <td style={{ border: "none", width: "20px" }}>
                  <OrderCard />
                </td>
                <td style={{ border: "none", width: "20px" }}>
                  <OrderCard />
                </td>
              </tr>

              <tr>
                <td>2021/05/03 12:10</td>
                <td>Success</td>
                <td>5</td>
                <td>Action</td>
              </tr>
              <tr>
                <td style={{ border: "none", width: "20px" }}>
                  <OrderCard />
                </td>
                <td style={{ border: "none", width: "20px" }}>
                  <OrderCard />
                </td>
              </tr>

              <tr>
                <td>2021/05/03 12:10</td>
                <td>Processing</td>
                <td>Amount</td>
                <td>Action</td>
              </tr> */}
            </tbody>
          </Table>
          <ProductArea prods={orderProducts}/>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Orders;
