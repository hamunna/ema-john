import React from 'react';
import useCart from '../../Hooks/useCart';
import useProducts from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const OrderReview = () => {
	const [products] = useProducts();
	const [cart, setCart] = useCart(products);
	const history = useHistory();

	const handleRemove = key => {
		const newCart = cart.filter(product => product.key !== key);
		setCart(newCart);
		deleteFromDb(key);
	}

	const handlePlaceOrder = () => {
		history.push('/placeorder');
		setCart([]);
		clearTheCart();
	}

	return (
		<div>

			<div className="shop-container">
				<div className="product-container">
					{
						cart.map(product => <OrderItem
							key={product.key}
							product={product}
							handleRemove={handleRemove}
						></OrderItem>)
					}
				</div>

				<div className="cart-container">
					<Cart cart={cart}>
						<Link>
							<button
								className="btn-regular"
								onClick={handlePlaceOrder}
							>Place Order</button>
						</Link>
					</Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderReview;