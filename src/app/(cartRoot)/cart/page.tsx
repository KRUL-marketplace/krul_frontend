import { CartPageUI } from '@ui/pages/cart/cart.page';

import { addCartItem, deleteCartItem, getCart } from '@actions/cart.action';
import { AddCartItemBody, DeleteCartItemBody, GetCartResponse } from '@models/cart.model';

const isCartResponseFailed = (response: GetCartResponse): response is Error => {
	return (response as Error).message !== undefined;
};

const CartPage = async () => {
	const cart = await getCart('28942632-6112-42ef-9d12-749bcf0e58ac');

	const successResponse = !isCartResponseFailed(cart) && cart.success;

	const addToCart = async (body: AddCartItemBody) => {
		'use server';

		return await addCartItem(body);
	};

	const deleteFromCart = async (body: DeleteCartItemBody) => {
		'use server';

		return await deleteCartItem(body);
	};

	if (successResponse) {
		return <CartPageUI cart={cart.data} addToCart={addToCart} deleteFromCart={deleteFromCart} />;
	}
};

export default CartPage;
