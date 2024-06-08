import {
	AddCartItemBody,
	AddCartItemResponse,
	Cart,
	CartResponseError,
	DeleteCartItemBody,
	DeleteCartItemResponse,
} from '@app/(cartRoot)/cart/cart.model';

import { API } from '@api/api';

export const getCart = async (userId: string): Promise<Cart | CartResponseError> => {
	try {
		const response = await fetch(`${API.get.cart.getByUserId(userId)}`, {
			headers: {
				Accept: 'application/json',
			},
			next: {
				revalidate: 0,
			},
		});

		const { cart }: { cart: Cart } = await response.json();

		return cart;
	} catch (error) {
		console.error('error', error);

		return {
			error: 'Error while fetching cart items. Please reload the page',
		};
	}
};

export const addCartItem = async (body: AddCartItemBody): Promise<AddCartItemResponse> => {
	try {
		const response = await fetch(`${API.post.cart.addProduct}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			next: {
				revalidate: 0,
			},
		});

		const { id }: { id: string } = await response.json();

		return { id };
	} catch (error) {
		console.error(error);

		return {
			error: 'Error while adding item to cart. Please try again',
		};
	}
};

export const deleteCartItem = async (body: DeleteCartItemBody): Promise<DeleteCartItemResponse | CartResponseError> => {
	try {
		const response = await fetch(`${API.delete.cart.deleteProduct}`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
			next: {
				revalidate: 0,
			},
		});

		const { message }: { message: string } = await response.json();

		return { message };
	} catch (error) {
		console.error(error);

		return {
			error: 'Error while deleting item from cart. Please try again',
		};
	}
};
