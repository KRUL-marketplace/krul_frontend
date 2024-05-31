import React from 'react';

import { Title } from '@ui/atoms/typography/title/title';
import { CartItem } from '@ui/molecules/cart-item/cart-item';

import css from './cart.module.scss';

interface Props {}

const getCartItems = async () => {
	return await new Promise(() => '');
};

const CartPage = async ({}: Props) => {
	return (
		<div className={css.cart}>
			<Title level={'3'} className={css.cart__title}>
				Cart
			</Title>
			<div className={css.cart__wrapper}>
				<CartItem />
			</div>
		</div>
	);
};

export default CartPage;
