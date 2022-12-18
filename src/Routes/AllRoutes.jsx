import React from "react";
import { Route, Routes } from "react-router-dom";

import AddToCartPage from "../Pages/Manisha_Wadhe_Folder/Components/AddToCartPage";
import Cart from "../Pages/Manisha_Wadhe_Folder/Components/Cart";

// import Login_Button from "../Pages/Rajendra_Folder/Login_Button";
// import AdminPage from "../Pages/Rajendra_Folder/SmallPages/AdminPage";
// import Admin_Signup from "../Pages/Rajendra_Folder/SmallPages/Admin_Signup";
// import Buyer_Signup from "../Pages/Rajendra_Folder/SmallPages/Buyer_Signup";
// import Login_Button from "../Pages/Rajendra_Folder/Login_Button";
// import AdminPage from "../Pages/Rajendra_Folder/SmallPages/AdminPage";
// import Admin_Signup from "../Pages/Rajendra_Folder/SmallPages/Admin_Signup";
// import Buyer_Signup from "../Pages/Rajendra_Folder/SmallPages/Buyer_Signup";
// import CartPage from "./Pages/Danish_Pinjari_Folder/WishList";

// Dugesh page import ------- upper code commented because of conflict--------------------------------------------------> 
// import {ProductPage} from "../Pages/Durgesh_Folder/Pages/ProductPage"
// import {SinglePageProduct} from "../Pages/Durgesh_Folder/Pages/SinglePageProduct"

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
        
        {/* <Route path="/productLaptop" element={<ProductPage />}></Route>
        <Route path="/productLaptop/:id" element={<SinglePageProduct />}></Route> */}
       
        
      </Routes>
    </>
  );
};

export default AllRoutes;
