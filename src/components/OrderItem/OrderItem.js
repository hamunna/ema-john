import React from 'react';

const OrderItem = (props) => {
	const { key, img, name, price, quantity } = props.product;
	const { handleRemove } = props;

	return (
		<div className="single-product">
			{/* <div>
				<img src={img} alt="" />
			</div> */}
			<div className="product-info">
				<h4>{name}</h4>
				<p>Price: {price}</p>
				<p>Quantity: {quantity}</p>
				<button
					onClick={() => handleRemove(key)}
					className="btn-regular"
				>Remove</button>
			</div>
		</div>
	);
};

export default OrderItem;