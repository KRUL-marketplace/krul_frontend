import { isDevMode } from '@utils/dev';

import { API } from '@api/api';
import { cartMock } from '@mock/cart.mock';
import {
	AddCartItemBody,
	AddCartItemResponse,
	Cart,
	DeleteCartItemBody,
	DeleteCartItemResponse,
	GetCartResponse,
} from '@models/cart.model';

export const getCart = async (userId: string): Promise<GetCartResponse> => {
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

		return {
			success: true,
			data: cart,
		};
	} catch (error) {
		const devSuccessResponse = {
			success: true,
			data: cartMock,
		};

		if (isDevMode) {
			return devSuccessResponse;
		} else throw new Error('Error while fetching cart items. Please reload the page');
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

		return {
			success: true,
			data: id,
		};
	} catch (error) {
		console.error(error);

		throw new Error('Error while adding item to cart. Please try again');
	}
};

export const deleteCartItem = async (body: DeleteCartItemBody): Promise<DeleteCartItemResponse> => {
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

		return {
			success: true,
			data: message,
		};
	} catch (error) {
		console.error(error);

		throw new Error('Error while deleting item from cart. Please try again');
	}
};
