import React from "react";
import { Route, Routes } from "react-router-dom";
import AddToCartPage from "../Pages/Manisha_Wadhe_Folder/Components/AddToCartPage";
import Cart from "../Pages/Manisha_Wadhe_Folder/Components/Cart";

const AllRoutes = () => {
  return (
    <>
      <Routes>

        <Route path={"/"} element={<AddToCartPage />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </>
  );
};

export default AllRoutes;

console.log('hello')
