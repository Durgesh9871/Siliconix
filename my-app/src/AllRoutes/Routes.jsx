import { Routes, Route } from "react-router-dom";
import React from "react";
import { ProductPage } from "../Page/Durgesh_Folder/Pages/ProductPage";
import { SinglePageProduct } from "../Page/Durgesh_Folder/Pages/SinglePageProduct";
//import { HomePage } from "../Page/Durgesh_Folder/Pages/homePage";
import { SearchBar } from "../Page/Manisha_Wadhe_Folder/SearchBar";
//import Home from "../Components/Home/Home";
import Home from "../R sai kiran/Home"
import Admin from "../Components/SignUp/Admin/Admin";
import User from "../Components/SignUp/User/User";
import Admin_Dashboard from "../Components/Admin/Admin_Dashboard";

import Cart from '../Page/Durgesh_Folder/Pages/Cart'
import cartStore from '../Danish Pinjari/store/store';
import { Provider } from 'react-redux';
import WishList from '../Page/Durgesh_Folder/Pages/WishList';
// import Login from './../Components/Login/Login';



const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/productLaptop" element={<ProductPage />}></Route>
        <Route
          path="/productLaptop/:id"
          element={<SinglePageProduct />}
        ></Route>
        <Route path="/search" element={<SearchBar />}></Route>
        {/* ********************************* */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/admin_signup" element={<Admin />} />
        <Route path="/user_signup" element={<User />} />
        <Route path="/admin" element={<Admin_Dashboard />} />
        {/* by Danish Pinjari */}
        <Route
					path="/cartpage"
					element={
						<Provider store={cartStore}>
							<Cart />
						</Provider>
					}
				></Route>
				<Route
					path="/wishlist"
					element={
						<Provider store={cartStore}>
							<WishList />
						</Provider>
					}
				></Route>
      </Routes>
    </div>
  );
};

export { AllRoutes };
