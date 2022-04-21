import Navbar from "../navbar/Navbar";
// import Dropdown from 'react-bootstrap/Dropdown';
import Form from "react-bootstrap/Form";
// import ProductCard from './productCard/card'
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./Home.css";

import { useState, useEffect } from "react";
import useToken from "../../utils/hooks/useToken";
import {
  getAllProds,
  verifyClientRole,
  getUserLastOrderProds,
  addOrderfromUser,
} from "../../api/index2";

import ProductCardTemplate from "./productCard/cardTemplate";
import MyOrderItem from "./myOrderItem/myOrderItem";

export default function UserHome(props) {
  console.log("I'm in The Home Page of The Use");

  const { token } = useToken();
  const [myData, setMyData] = useState({});
  const [allProds, setAllProds] = useState([]);
  const [myLastProds, setMyLastProds] = useState([]);

  const getAllProducts = async () => {
    await getAllProds(token)
      .then((res) => {
        console.log(res.data);
        setAllProds(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getMyData = async () => {
    await verifyClientRole(token)
      .then((res) => {
        console.log(res.data.response.result);
        setMyData(res.data.response.result);
        console.log(myData);
        getMyLastOrderProducts(res.data.response.result.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getMyLastOrderProducts = async (id) => {
    console.log(myData);
    await getUserLastOrderProds(id, token)
      .then((res) => {
        console.log(res.data);
        !res.data.response.result.message &&
          setMyLastProds(res.data.response.result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
    getMyData();
  }, []);

  useEffect(() => {
    console.log(myData);
    console.log(allProds);
    console.log(myLastProds);
  }, [myData, allProds, myLastProds]);

  // order template {product:{}, quantity:1}}}
  const [myOreders, setMyOreders] = useState([]);

  // [
  //     {product:{}, quantity:1},
  //     {product:{}, quantity:1},
  //     {product:{}, quantity:1},
  // ]

  let [total, setTotal] = useState(0);
  const [orderNote, setOrderNote] = useState("");

  const calculateTotal = () => {
    let total = 0;
    for (let i = 0; i < myOreders.length; i++) {
      total += myOreders[i].product.price * myOreders[i].quantity;
    }
    setTotal(total);
  };

  useEffect(() => {
    calculateTotal();
  }, [myOreders]);

  const addToOrder = (product) => {
    const exist = myOreders.find((item) => item.product.id === product.id);
    if (!exist) {
      setMyOreders([...myOreders, { product: product, quantity: 1 }]);
    } else {
      setMyOreders(
        myOreders.map((item) =>
          item.product.id === product.id
            ? { product: product, quantity: item.quantity + 1 }
            : item
        )
      );
    }

    console.log(myOreders);
    console.log(total);
  };

  const subFromOrder = (product) => {
    const exist = myOreders.find((item) => item.product.id === product.id);
    if (exist) {
      if (exist.quantity > 1) {
        setMyOreders(
          myOreders.map((item) =>
            item.product.id === product.id
              ? { product: product, quantity: item.quantity - 1 }
              : item
          )
        );
      }
    }
  };

  function removeFromOrder(product) {
    setMyOreders(myOreders.filter((item) => item.product.id !== product.id));
  }

  const confirmSubmit = async () => {
    const prods = myOreders.map((item) => {
      return {
        prod_id: item.product.id,
        quantity: item.quantity,
        price: item.product.price,
      };
    });
    await addOrderfromUser(myData.id, total, prods, orderNote, token)
      .then((res) => {
        console.log(res.data);
        setMyOreders([]);
        setTotal(0);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (myOreders.length > 0) {
      confirmSubmit();
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="productsDetails">
          <h1>Orders</h1>
          <div className="Adminorders">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {myOreders.map((item, index) => {
                  return (
                    <MyOrderItem
                      key={index}
                      item={item}
                      add={addToOrder}
                      sub={subFromOrder}
                      removeFromOrder={removeFromOrder}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>

          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              name="note"
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
            />
          </FloatingLabel>

          <label htmlFor="" className="total">
            Total :{total}
          </label>
          <button className="confirm" onClick={handleSubmit}>
            Confirm
          </button>
        </div>
        <div className="products-section">
          <p className="product-h">Latest Products</p>
          <div className="products">
            {myLastProds.length ? (
              myLastProds.map((p) => {
                return (
                  <ProductCardTemplate
                    key={p.id}
                    product={p}
                    addToOrder={addToOrder}
                  />
                );
              })
            ) : (
              <div className="no-products">No products</div>
            )}
          </div>

          <hr className="product-hr"></hr>
          <p className="product-h">All Products</p>

          <div className="products">
            {allProds.length ? (
              allProds.map((p) => {
                return (
                  <ProductCardTemplate
                    key={p.id}
                    product={p}
                    addToOrder={addToOrder}
                  />
                );
              })
            ) : (
              <div className="no-products">No products</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
