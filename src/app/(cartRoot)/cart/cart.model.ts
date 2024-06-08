import { ProductInfo } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

export interface Cart {
	cartId: string;
	userId: string;
	products: CartProduct[];
	createdAt: string;
	updatedAt: string;
	totalPrice: number;
}

export interface CartProduct {
	itemId: string;
	productId: string;
	info: ProductInfo;
	quantity: number;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface CartItemBody {
	userId: string;
	productId: string;
	quantity: number;
}

export type AddCartItemBody = CartItemBody;
export type DeleteCartItemBody = CartItemBody;

export interface AddCartItemResponseSuccess {
	id: string;
}

export interface DeleteCartItemResponseSuccess {
	message: string;
}

export interface CartResponseError {
	error: string;
}

export type AddCartItemResponse = AddCartItemResponseSuccess | CartResponseError;
export type DeleteCartItemResponse = DeleteCartItemResponseSuccess | CartResponseError;
