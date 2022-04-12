import { Routes, Route } from "react-router-dom";
import Login from "./component/login/Login";
import Signup from "./component/signup/Signup";
import Error from "./component/error/Error";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import React from "react";

function App() {

  <Route path="*" element={<Error />} />;
  return (
    <>
      <Navbar></Navbar>
      <main className="mt-5">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Signup />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
      <Footer></Footer>

    </>
  );
}

export default App;
