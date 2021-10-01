import React from 'react';
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const element = <FontAwesomeIcon icon={faShoppingCart} />;
const Product = (props) => {
	const {img, name, seller, price, stock, star } = props.product;
	return (
		<div className="products">
			<div className="single-product">
				<div className="product-img">
					<img src={img} alt="" />
				</div>

				<div className="product-info">
					<h3>Product {name}</h3>
					<p><small>by: {seller}</small></p>
					<p><strong>Price: {price}</strong></p>
					<p><small>only {stock} left in the stock - get it fast</small></p>

					<Rating
						initialRating={star}
						readonly
						emptySymbol="far fa-star icon-color"
						fullSymbol="fas fa-star icon-color"
					></Rating>
					<br />
					<button
						className="btn-regular"
						onClick={() => props.handleAddToCart(props.product)}
					>{element} add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default Product;