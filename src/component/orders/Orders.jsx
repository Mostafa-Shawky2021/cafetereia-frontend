import "./orders.css";
import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import { Button, Table } from "react-bootstrap";
import Footer from "../footer/Footer";
// import OrderCard from "./orderCard/OrderCard";

import useToken from "../../utils/hooks/useToken";
import { verifyClientRole, getUserOrders, cancelOrder, getOrderProductsOfOrder, getAllChecksByDate } from "../../api/index2";
import ProductArea from "./productArea/ProductArea";
import ShowOrderDetails from "../admin/orders/showOrderDetails/ShowOrderDetails";

const Orders = () => {

  const { token } = useToken();
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const [orderId, setOrderId] = useState(null);
  const [orderProducts, setOrderProducts] = useState([]);

  const [dateStart, setDateStart] = useState('');
  const [dateEnd, setDateEnd] = useState('');

  const [activeOrder, setActiveOrder] = useState(0);

  useEffect(() => {
    getMyData();
  }, []);

    /************************************* */
    useEffect(() => {
      if(dateStart && dateEnd){
        getMyData();
        setOrderProducts([]);
      }
    }, [dateStart, dateEnd]);
    /************************************* */

  const getMyData = async () => {
    await verifyClientRole(token)
    .then((res) => {
        console.log(res.data.response);
        // setMyData(res.data.response.result);
  
        if(dateStart && dateEnd){
       
          getOrders(res.data.response.result.id, dateStart, dateEnd);
        }else{
          getOrders(res.data.response.result.id);
        }
    })
    .catch((err) => {
        console.log(err);
    })
}

  const getOrders = async (id, tempDateStart, tempDateEnd) => {
    if (id && tempDateStart && tempDateEnd) {
      await getAllChecksByDate(id, tempDateStart, tempDateEnd, token)
        .then((res) => {
          console.log(res.data);
          setOrders(res.data.response.result);
          setActiveOrder(id);
        })
        .catch((err) => {
          console.log(err);
        });
      } else {
        await getUserOrders(id, token)
        .then((res) => {
          setOrders(res.data.response.result);
        })
        .catch((err) => {
          console.log(err);
        })
      }
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
      setShow(true);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <Navbar />
      <div className="mt-4 data row justify-content-center">
            <div className="col-3">
                <input 
                    type="date" 
                    name="date-from" 
                    className="form-control" 
                    onChange={(e) => setDateStart(e.target.value)}
                />
            </div>
            <div className="col-3">
                <input 
                    type="date" 
                    name="date-to"  
                    className="form-control col-md-3"
                    onChange={(e) => setDateEnd(e.target.value)}
                />
            </div>
            
        </div>
      <section className="orders">
        <div className="container-orders">
          <h2 className="title text-center">My Orders</h2>

          <ShowOrderDetails show={show} setShow={setShow} prods={orderProducts}/>

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
            {orders.length? orders.map((order, index) => (
                <tr className={activeOrder === order.id && 'active'} key={index} onClick={() => getProdsOrder(order.id)}>
                  <td>{order.date}</td>
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
                      <Button onClick={() => cancelOrderHandle(order.id)} variant="danger">Cancel</Button>
                    ) : ''}
                  </td>
                </tr>
              )): <tr><td colSpan="5">
                <h3 className='text-center' style={{ margin: "40px auto", color: "#BBB"}}>There is No Products At This Order</h3>  
              </td></tr>
              }
            </tbody>
          </Table>
          {/* <ProductArea prods={orderProducts}/> */}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Orders;
