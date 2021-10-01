import React from 'react';
import logo from '../../logo.png';
import './Header.css';

const Header = () => {
	return (
		<div>
			<header>
				<img src={logo} alt="" />

				<nav>
					<a href="/Shop">Shop</a>
					<a href="/Review">See Reviews</a>
					<a href="/Inventory">Manage Inventory</a>
				</nav>
			</header>
		</div>
	);
};

export default Header;