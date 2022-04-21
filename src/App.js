import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Signup from "./component/signup/Signup";

import Error from "./component/error/Error";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";


import { Navigate } from "react-router-dom";

import useToken from "./utils/hooks/useToken";
import useIsAdmin from "./utils/hooks/useIsAdmin";
import { verifyClientRole } from "./api/index2";

import Login from "./component/login/Login";

// Admin
import AdminHome from "./component/admin/home/Home";
import Adduser from "./component/admin/adduser/Adduser";
import AddCategory from "./component/admin/addcategory/AddCategory";
import AddProduct from "./component/admin/addproduct/AddProduct";
import Categories from "./component/admin/categories/Categories";
import Product from "./component/admin/product/Product";
import AdminUsers from "./component/admin/users/Users";
import AdminChecks from "./component/admin/checks/Checks";
import OrdersAdmin from "./component/admin/orders/OrdersAdmin";

// User
import UserHome from "./component/home/Home";
import Orders from "./component/orders/Orders";



function App() {

  const { token } = useToken();
  const { isAdmin } = useIsAdmin();
  const [role, setRole] = useState("");

  const verifyRole = async () => {
    await verifyClientRole(token)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.response.result);
        // res.data.response.result.role === 1? setRole("admin") : setRole("user");
        console.log(isAdmin);
        isAdmin == 1? setRole("admin") : setRole("user");
      console.log(role);
      });
  };

  useEffect(() => {
    if (token) {
      verifyRole();
    }
  }, []);

  return (
    <>
      <Routes>
      <Route path="/addproduct"  element={<AddProduct />} />
      <Route path="/home"  element={<AdminHome />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/home"   element={<AdminHome />} />

        {
          role === "admin" ? (
            <>
              <Route path="/login"  element={<Navigate to="/home" />} />
              <Route path="/adduser" element={<Adduser />} />
              <Route path="/edituser" >
                <Route path=":userId"    element={<Adduser />} />
              </Route>
              <Route path="/addcategory" element={<AddCategory />} />
              <Route path="/addproduct"  element={<AddProduct />} />
              <Route path="/editproduct" >
                <Route path=":prodId"    element={<AddProduct />} />
              </Route>
              <Route path="/users"       element={<AdminUsers />} />
              <Route path="/products"    element={<Product />} />
              {/* <Route path="/categories"  element={<Categories />} /> */}
              <Route path="/checks"      element={<AdminChecks />} />
              <Route path="/orders"      element={<OrdersAdmin />} />
            </>
          ) : role === "user" ? (
            <>
              <Route path="/login"  element={<Navigate to="/home" />} />
              <Route path="/home"   element={<UserHome />} />
              <Route path="/orders" element={<Orders />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />} />
            </>
          )
        }
        {/* <Route path="*" element={<Error />} /> */}

          {/* {
            token && (
              <> */}
                {/* <Route path="/signup" element={<Signup />} /> */}
                {/* <Route path="/home" element={<UserHome />} /> */}
                {/* <Route path="/" element={<Signup />} /> */}
                {/* <Route path="*" element={<Error />} /> */}
                {/* <Route path="/admin" > */}

                  {/* <Route path="home" element={<Home onDataChange={onDataChange} count={count} order={order} />} /> */}
                  {/* <Route path="products" element={<Product />} />
                  <Route path="categories" element={<Categories />} /> */}
                  {/* <Route path="addproduct" element={<AddProduct />} /> */}
                  {/* <Route path="addcategory" element={<AddCategory />} /> */}
                  {/* <Route path="addcategory" element={<AddCategory />} /> */}
                  {/* <Route path="adduser" element={<Adduser />} /> */}
                  {/* <Route path="users" element={<Users />} /> */}
                  {/* <Route path="checks" element={<Checks />} />
                  <Route path="orders" element={<Orders />} /> */}
                {/* </Route> */}
                {/* <Route path="*" element={<Error />} />; */}
              {/* </> */}
            {/* )  */}

          {/* } */}
      </Routes>

    </>
  );
}

export default App;