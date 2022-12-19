import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin_Dashboard from "../Components/Admin/Admin_Dashboard";
import Cart from "../Components/Cart/Cart";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Admin from "../Components/SignUp/Admin/Admin";
import User from "../Components/SignUp/User/User";
import Product from "../Components/Product/Product";
import Protected_Route from "../Components/Protected_Route/Protected_Route";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin_signup" element={<Admin />} />
        <Route path="/user_signup" element={<User />} />
        <Route path="/admin" element={<Admin_Dashboard />} />
        <Route
          path="/cart"
          element={
            <Protected_Route>
              <Cart />
            </Protected_Route>
          }
        />
        <Route path="/Product" element={<Product />} />
      </Routes>
    </div>
  );
};

export default MainRoute;
