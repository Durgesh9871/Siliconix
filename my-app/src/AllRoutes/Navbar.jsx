import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
	const items = useSelector((state) => state.cart);
	console.log('items:', items);
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-around',
				border: '2px solid red',
				height: '10vh',
			}}
		>
			<Link to="/">Home Page Link</Link>
			<Link to="/productLaptop">Product Page Link</Link>
			<Link to="/SinglePage">Single Page</Link>
			<Link to="/cart">Cart Page</Link>
			<Link to="/wishlist">Wish List</Link>
			<span>Cart Items : {items.length} </span>
		</div>
	);
};

export { Navbar };
