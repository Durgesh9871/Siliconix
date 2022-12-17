import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import AddToCartPage from "../Pages/Manisha_Wadhe_Folder/Components/AddToCartPage";
import Cart from "../Pages/Manisha_Wadhe_Folder/Components/Cart";

// import Login_Button from "../Pages/Rajendra_Folder/Login_Button";
// import AdminPage from "../Pages/Rajendra_Folder/SmallPages/AdminPage";
// import Admin_Signup from "../Pages/Rajendra_Folder/SmallPages/Admin_Signup";
// import Buyer_Signup from "../Pages/Rajendra_Folder/SmallPages/Buyer_Signup";
=======
import Login_Button from "../Pages/Rajendra_Folder/Login_Button";
import AdminPage from "../Pages/Rajendra_Folder/SmallPages/AdminPage";
import Admin_Signup from "../Pages/Rajendra_Folder/SmallPages/Admin_Signup";
import Buyer_Signup from "../Pages/Rajendra_Folder/SmallPages/Buyer_Signup";
import CartPage from "./Pages/Danish_Pinjari_Folder/WishList";

>>>>>>> 8fecf5e2a2d80b7c5e5a9c09b77321e8260be549
const AllRoutes = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Login_Button />} />
        <Route path="/admin_signup" element={<Admin_Signup />} />
        <Route path="/buyer_signup" element={<Buyer_Signup />} />
        <Route path="/admin" element={<AdminPage />} /> */}

        <Route path={"/"} element={<AddToCartPage />} />
        <Route path={"/cart"} element={<Cart/>} />

      </Routes>
    </>
  );
};

export default AllRoutes;
