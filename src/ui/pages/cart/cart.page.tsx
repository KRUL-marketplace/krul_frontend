'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

import {
	AddCartItemBody,
	AddCartItemResponse,
	Cart,
	CartItemBody,
	CartResponseError,
	DeleteCartItemBody,
	DeleteCartItemResponse,
} from '@app/(cartRoot)/cart/cart.model';
import { isCartDefined } from '@app/(cartRoot)/cart/utils';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { iconAdd } from '@ui/atoms/icons/icon-add';
import { iconBin } from '@ui/atoms/icons/icon-bin';
import { iconRemove } from '@ui/atoms/icons/icon-remove';
import { Text } from '@ui/atoms/typography/text/text';
import { Title } from '@ui/atoms/typography/title/title';
import { Cell } from '@ui/molecules/cell/cell';
import { CartEmptyPage } from '@ui/pages/cart/cart-empty.page';

import { createInvoiceLink } from '@api/telegram';
import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import example from '../../../../public/images/example 1.png';

import classNames from 'classnames';

import css from './cart.module.scss';
import { ROUTES } from '@api/routes';
import { InvoiceBody } from '@models/invoice.model';
import { platform } from '@platform/platform';

interface Props {
	cart: Cart | CartResponseError;
	addToCart: (body: AddCartItemBody) => Promise<AddCartItemResponse>;
	deleteFromCart: (body: DeleteCartItemBody) => Promise<DeleteCartItemResponse>;
}

export const CartPageUI = (props: Props) => {
	const { cart, addToCart, deleteFromCart } = props;

	const { replace } = useRouter();
	const [userCart, setUserCart] = React.useState<Cart | CartResponseError>(cart);

	const handleAddToCart = async (body: AddCartItemBody) => {
		await addToCart(body);

		setUserCart(prevState => {
			if (isCartDefined(prevState)) {
				return {
					...prevState,
					...prevState?.products,
					products: prevState?.products.map(product => {
						if (product.productId === body.productId) {
							return {
								...product,
								quantity: product.quantity + 1,
							};
						}
						return product;
					}),
				};
			}
			return prevState;
		});
	};

	const clearCart = async (body: DeleteCartItemBody) => {
		if (!isCartDefined(cart)) {
			return cart;
		}

		try {
			if (confirm('Do you want to clear your cart?')) {
				await deleteFromCart(body);

				setUserCart({
					...cart,
					products: cart.products.filter(item => item.productId !== body.productId),
				});
			}
			return cart;
		} catch (error) {
			console.error('Error updating user cart:', error);
		}
	};

	const decreaseQuantity = async (body: CartItemBody) => {
		await deleteFromCart(body);

		setUserCart(cart => {
			if (!isCartDefined(cart)) {
				return cart;
			}

			const updatedProducts = cart.products.map(item =>
				item.productId === body.productId && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item,
			);

			return {
				...cart,
				products: updatedProducts.filter(item => item.quantity > 0),
			};
		});
	};

	const invoice = platform.getInvoice && platform.getInvoice();

	const createInvoice = async () =>
		await createInvoiceLink(body).then(({ result }) => {
			invoice?.open(result, 'url').then(status => {
				// Output: 'paid'
				return console.log(status);
			});
		});

	const mainButtonHandler =
		isCartDefined(userCart) && userCart.products.length !== 0 ? createInvoice : () => replace(ROUTES.brands.all);

	const mainButtonText = isCartDefined(userCart) && userCart.products.length !== 0 ? 'Continue' : "Let's go";

	useMainButtonTelegram(mainButtonHandler, mainButtonText);

	const cartItems = isCartDefined(userCart) ? userCart.products : userCart.error;

	return cartItems.length !== 0 && typeof cartItems !== 'string' ? (
		<div className={classNames(css.cart, 'container')}>
			<Title level={'3'} className={css.cart__title}>
				Cart
			</Title>
			<div className={css.cart__wrapper}>
				{cartItems.map(cartProduct => {
					return (
						<Cell
							key={cartProduct.productId}
							title={cartProduct.info.name}
							image={example.src}
							caption={`${cartProduct.info.price} $`}
							actionBottom={
								<div className={css.cart__cartItem__icons}>
									<IconButton
										onClick={() =>
											decreaseQuantity({
												userId: '28942632-6112-42ef-9d12-749bcf0e58ac',
												productId: cartProduct.productId,
												quantity: 1,
											})
										}>
										{iconRemove}
									</IconButton>
									<Text>{cartProduct.quantity}</Text>
									<IconButton
										onClick={() =>
											handleAddToCart({
												userId: '28942632-6112-42ef-9d12-749bcf0e58ac',
												productId: cartProduct.productId,
												quantity: 1,
											})
										}>
										{iconAdd}
									</IconButton>
								</div>
							}
							actionRight={
								<IconButton
									onClick={() =>
										clearCart({
											userId: '28942632-6112-42ef-9d12-749bcf0e58ac',
											productId: cartProduct.productId,
											quantity: cartProduct.quantity,
										})
									}>
									{iconBin}
								</IconButton>
							}
						/>
					);
				})}
			</div>
		</div>
	) : (
		<CartEmptyPage />
	);
};

const body: InvoiceBody = {
	title: 'U.S. Polo',
	description: 'U.S. Polo T-shirt',
	payload: 'U.S. Polo T-shirt',
	provider_token: '381764678:TEST:86427',
	currency: 'USD',
	prices: [{ label: 'U.S. Polo T-shirt', amount: '70000' }],
	photo_url: example.src,
	photo_height: 96,
	photo_width: 96,
	photo_size: 96,
	max_tip_amount: '10000',
	suggested_tip_amounts: ['10000', '20000', '50000'],
	need_name: true,
	need_phone_number: true,
	need_shipping_address: true,
	is_flexible: true,
};
