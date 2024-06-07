import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

export interface CartItem extends Product {
	quantity: number;
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

export interface AddCartItemResponseError {
	code: number;
	message: string;
	details: [
		{
			'@type': string;
			additionalProp1: string;
			additionalProp2: string;
			additionalProp3: string;
		},
	];
}

export interface DeleteCartItemResponseSuccess {
	message: string;
}

export interface DeleteCartItemResponseError {
	code: number;
	message: string;
	details: [
		{
			'@type': string;
			additionalProp1: string;
			additionalProp2: string;
			additionalProp3: string;
		},
	];
}

export type AddCartItemResponse = AddCartItemResponseSuccess | AddCartItemResponseError;
export type DeleteCartItemResponse = DeleteCartItemResponseSuccess | DeleteCartItemResponseError;
