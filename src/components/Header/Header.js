import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<header>
				<img src={logo} alt="" />

				<nav>
					<NavLink to="/Shop">Shop</NavLink>

					<NavLink to="/Review">Order Review</NavLink>

					<NavLink to="/Inventory">Manage Inventory</NavLink>
				</nav>

				{/* <nav>
					<a href="/Shop">Shop</a>
					<a href="/Review">Order Review</a>
					<a href="/Inventory">Manage Inventory</a>
					
				</nav> */}

			</header>
		</div>
	);
};

export default Header;