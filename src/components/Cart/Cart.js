import React from 'react';

const Cart = (props) => {
	const { cart } = props;
	
	// const getReducter = (prev, product) => prev + product.price
	// const total = cart.reduce(getReducter, 0);
	
	let totalQuantity = 0;
	let total = 0;
	for (const product of cart) {
		if (!product.quantity) {
			product.quantity = 1;
		}
		total = total + product.price * product.quantity;
		totalQuantity = totalQuantity + product.quantity;
	}
	const shipping = 15;
	const tax = (total + shipping) * 0.10;
	const grandTotal = total + shipping + tax;



	return (
		<div className="cart-calc">
			<h3>Order Summary</h3>
			{/* <h4>Total Items: {cart.length}</h4> */}
			<h4>Total Items: {totalQuantity}</h4>

			<p><small>Total: {total.toFixed(2)}</small></p>
			<p><small>Shipping: {shipping}</small></p>
			<p><small>Tax: {tax.toFixed(2)}</small></p>
			<h5>Grand Total: {grandTotal.toFixed(2)}</h5>
		</div>
	);
};

export default Cart;