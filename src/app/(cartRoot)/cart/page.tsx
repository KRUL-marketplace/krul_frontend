import { addCartItem, deleteCartItem, getCartItems } from '@app/(cartRoot)/cart/actions';
import { AddCartItemBody, DeleteCartItemBody } from '@app/(cartRoot)/cart/cart.model';

import { CartPageUI } from '@ui/pages/cart/cart.page';

const CartPage = async () => {
	const cartProducts = await getCartItems();

	const addToCart = async (id: AddCartItemBody) => {
		'use server';

		return await addCartItem(id);
	};

	const deleteFromCart = async (id: DeleteCartItemBody) => {
		'use server';

		return await deleteCartItem(id);
	};

	return <CartPageUI cartProducts={cartProducts} addToCart={addToCart} deleteFromCart={deleteFromCart} />;
};

export default CartPage;
