import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin_Dashboard from '../Components/Admin/Admin_Dashboard';
import Home from '../Components/Home/Home';
import Login from '../Components/Login/Login';
import Admin from '../Components/SignUp/Admin/Admin';
import User from '../Components/SignUp/User/User';
import Product from '../Components/Product/Product';
import Protected_Route from '../Components/Protected_Route/Protected_Route';
//* Danish Pinjari added
import Cart from '../Page/Durgesh_Folder/Pages/Cart';
import cartStore from '../Danish Pinjari/store/store';
import { Provider } from 'react-redux';
import WishList from '../Page/Durgesh_Folder/Pages/WishList';

const MainRoute = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/admin_signup" element={<Admin />} />
				<Route path="/user_signup" element={<User />} />
				<Route path="/admin" element={<Admin_Dashboard />} />
				{/* by Danish Pinjari */}
				<Route
					path="/cart"
					element={
						<Protected_Route>
							<Provider store={cartStore}>
								<Cart />
							</Provider>
						</Protected_Route>
					}
				></Route>
				<Route
					path="/wishlist"
					element={
						<Protected_Route>
							<Provider store={cartStore}>
								<WishList />
							</Provider>
						</Protected_Route>
					}
				></Route>

				<Route path="/Product" element={<Product />} />
			</Routes>
		</div>
	);
};

export default MainRoute;
