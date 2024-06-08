import { addCartItem, deleteCartItem, getCart } from '@app/(cartRoot)/cart/actions';
import { AddCartItemBody, DeleteCartItemBody } from '@app/(cartRoot)/cart/cart.model';

import { CartPageUI } from '@ui/pages/cart/cart.page';

const CartPage = async () => {
	const cart = await getCart('28942632-6112-42ef-9d12-749bcf0e58ac');

	const addToCart = async (body: AddCartItemBody) => {
		'use server';

		return await addCartItem(body);
	};

	const deleteFromCart = async (body: DeleteCartItemBody) => {
		'use server';

		return await deleteCartItem(body);
	};

	return <CartPageUI cart={cart} addToCart={addToCart} deleteFromCart={deleteFromCart} />;
};

export default CartPage;
