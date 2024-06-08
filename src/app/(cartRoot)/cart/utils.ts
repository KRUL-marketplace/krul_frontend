import {
	AddCartItemResponse,
	AddCartItemResponseSuccess,
	Cart,
	CartResponseError,
	DeleteCartItemBody,
	DeleteCartItemResponse,
	DeleteCartItemResponseSuccess,
} from '@app/(cartRoot)/cart/cart.model';

export const isCartDefined = (cart: Cart | CartResponseError): cart is Cart => {
	return (cart as Cart).cartId !== undefined;
};

export const isAddToCartSuccess = (response: AddCartItemResponse): response is AddCartItemResponseSuccess => {
	return (response as AddCartItemResponseSuccess).id !== undefined;
};

export const isDeleteToCartSuccess = (response: DeleteCartItemResponse): response is DeleteCartItemResponseSuccess => {
	return (response as DeleteCartItemResponseSuccess).message !== undefined;
};
