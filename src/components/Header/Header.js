import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<header>
				<img src={logo} alt="" />

				{/* <nav>
					<NavLink to="/Shop"><a href="/Shop">Shop</a></NavLink>

					<NavLink to="/Review"><a href="/Review">Order Reviews</a></NavLink>

					<NavLink to="/Inventory"><a href="/Inventory">Manage Inventory</a></NavLink>
				</nav> */}

				<nav>
					<a href="/Shop">Shop</a>
					<a href="/Review">Order Review</a>
					<a href="/Inventory">Manage Inventory</a>
					
				</nav>

			</header>
		</div>
	);
};

export default Header;