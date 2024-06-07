'use server';

import { cartMock } from '@app/(cartRoot)/cart/cart.mock';
import {
	AddCartItemBody,
	AddCartItemResponse,
	AddCartItemResponseError,
	CartItem,
	DeleteCartItemBody,
	DeleteCartItemResponse,
	DeleteCartItemResponseError,
} from '@app/(cartRoot)/cart/cart.model';

import { API } from '@api/api';
import { InvoiceBody } from '@models/invoice.model';

export const createInvoiceLink = async (body: InvoiceBody) => {
	try {
		const response = await fetch(`https://api.telegram.org/${process.env.TELEGRAM_BOT_TOKEN}/createInvoiceLink`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(body),
		});
		return await response.json();
	} catch (error) {
		console.log('error', error);
	}
};

export const getCartItems = async () => {
	try {
		const response = await fetch(`${API.get.cart.getAll}`, {
			headers: {
				Accept: 'application/json',
			},
			next: {
				revalidate: 100000,
			},
		});

		console.log(await response.json());
		// const { cartProducts }: { cartProducts: CartItem[] } = await response.json();
		return [];
	} catch (error) {
		console.error(error);

		return [];
	}
};

export const addCartItem = async (body: AddCartItemBody): Promise<AddCartItemResponse> => {
	try {
		const response = await fetch(`${API.post.cart.cartProduct(body)}`, {
			headers: {
				Accept: 'application/json',
			},
			next: {
				revalidate: 100000,
			},
		});

		const { id }: { id: string } = await response.json();
		console.log(id);
		return { id };
	} catch (error) {
		console.error(error);

		return error as AddCartItemResponseError;
	}
};

export const deleteCartItem = async (body: DeleteCartItemBody): Promise<DeleteCartItemResponse> => {
	try {
		const response = await fetch(`${API.delete.cart.cartProduct(body)}`, {
			headers: {
				Accept: 'application/json',
			},
			next: {
				revalidate: 100000,
			},
		});

		const { message }: { message: string } = await response.json();
		console.log(message);

		return { message };
	} catch (error) {
		console.error(error);

		return error as DeleteCartItemResponseError;
	}
};
