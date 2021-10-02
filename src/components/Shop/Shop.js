import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState([]);
	const [displayProducts, setDisplayProducts] = useState([]);

	const handleAddToCart = product => {
		// const newCart = [...cart, product];
		// setCart(newCart);
		// addToDb(product.key)

		const exists = cart.find(pd => pd.key === product.key);
		let newCart = [];
		if (exists) {
			const rest = cart.filter(pd => pd.key !== product.key);
			exists.quantity = exists.quantity + 1;
			newCart = [...rest, product];
		}
		else {
			product.quantity = 1;
			newCart = [...cart, product];
		}
		setCart(newCart);
		addToDb(product.key)
	}
	useEffect(() => {
		fetch('./products.JSON')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setDisplayProducts(data);
			});
	}, []);

	useEffect(() => {
		if (products.length) {
			const savedCart = getStoredCart();
			const storedCart = [];

			for (const key in savedCart) {

				const addedProduct = products.find(product => product.key === key);
				if (addedProduct) {
					const quantity = savedCart[key];
					addedProduct.quantity = quantity;
					storedCart.push(addedProduct);
				}
			}
			setCart(storedCart);
		}
	}, [products]);

	const handleSearch = event => {
		const searchedText = event.target.value;
		const matchedProduct = products.filter(product => product.name.toLowerCase().includes(searchedText.toLowerCase()));
		setDisplayProducts(matchedProduct)
		console.log(matchedProduct.length);
	}
	return (
		<div>
			<div className="search-container">
				<input
					type="search"
					placeholder="Search Here"
					onChange={handleSearch}
				/>
			</div>

			<div className="shop-container">

				<div className="product-container">
					{
						displayProducts.map(product => <Product
							key={product.key}
							product={product}
							handleAddToCart={handleAddToCart}
						></Product>)
					}
				</div>

				<div className="cart-container">
					<Cart cart={cart} >
						<Link to="/Review">
							<button className="btn-regular">Review Your Order</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default Shop;