import React from "react";
import { Route, Routes } from "react-router-dom";
import Login_Button from "../Pages/Rajendra_Folder/Login_Button";
import AdminPage from "../Pages/Rajendra_Folder/SmallPages/AdminPage";
import Admin_Signup from "../Pages/Rajendra_Folder/SmallPages/Admin_Signup";
import Buyer_Signup from "../Pages/Rajendra_Folder/SmallPages/Buyer_Signup";
import CartPage from "./Pages/Danish_Pinjari_Folder/WishList";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login_Button />} />
        <Route path="/admin_signup" element={<Admin_Signup />} />
        <Route path="/buyer_signup" element={<Buyer_Signup />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
