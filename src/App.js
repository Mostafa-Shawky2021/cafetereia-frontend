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
import Categories from "./component/admin/categories/Categories";
import AddCategory from "./component/admin/addcategory/AddCategory";
import Adduser from "./component/admin/adduser/Adduser";
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
          <Route path="categories" element={<Categories />}/>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="addcategory" element={<AddCategory />}/>
          <Route path="addcategory" element={<AddCategory />}/>
          <Route path="adduser" element={<Adduser />}/>
        </Route>
      </Routes>
      {/* </main> */}
      {/* <Footer></Footer> */}

    </>
  );
}

export default App;