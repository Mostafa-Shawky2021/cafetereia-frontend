import { Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Error from "./component/error/Error";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import React from "react";
import Home from "./component/admin/home/Home";
import Product from "./component/admin/product/Product";
import AddProduct from "./component/admin/addproduct/AddProduct";
import { Navigate } from "react-router-dom";
import { useState } from 'react';
function App() {

  let [count, setCount] = useState(0);
  let [order, setOrder] = useState('');

  let onDataChange = (count, order) => {
    setCount(count);
    setOrder(order);
    console.log("data app ", count, order);
  }
  // <Route path="*" element={<Error />} />;
  return (
    <>
      {/* <main className="mt-5"> */}
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Signup />} />
        <Route path="*" element={<Error />} />
        <Route path="/admin" >

          <Route path="home" element={<Home onDataChange={onDataChange} count={count} order={order} />} />
          <Route path="products" element={<Product />} />
          <Route path="addproduct" element={<AddProduct />} />
        </Route>
      </Routes>
      {/* </main> */}
      {/* <Footer></Footer> */}

    </>
  );
}

export default App;