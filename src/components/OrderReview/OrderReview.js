import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';

const OrderReview = () => {
	const [products, setProducts] = useProducts();
	const [cart, setCart] = useCart(products);

	const handleRemove = key => {
		const newCart = cart.filter(product => product.key !== key);
		setCart(newCart);
	}
	return (
		<div>
			
			<div className="shop-container">
				<div className="product-container">
					{
						products.map(product => <OrderItem
							key={product.key}
							product={product}
							handleRemove={handleRemove}
						></OrderItem>)
					}
				</div>

				<div className="cart-container">
					<Cart cart={cart}></Cart>
				</div>
			</div>
		</div>
	);
};

export default OrderReview;