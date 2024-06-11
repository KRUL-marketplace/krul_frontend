import { ProductInfo } from '@models/product.model';

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

// export interface AddCartItemResponse<Data> {
// 	success: boolean;
// 	data: Data | null;
// 	message?: Error;
// }

// export interface FetchResponse<Data> {
// 	success: boolean;
// 	data: Data | null;
// 	message?: Error;
// }

export interface AddCartItemResponseSuccess {
	success: boolean;
	data: string;
}

export interface DeleteCartItemResponseSuccess {
	success: boolean;
	data: string;
}

export interface CartSuccessResponse {
	success: boolean;
	data: Cart;
}

export type GetCartResponse = CartSuccessResponse | Error;
export type AddCartItemResponse = AddCartItemResponseSuccess | Error;
export type DeleteCartItemResponse = DeleteCartItemResponseSuccess | Error;
