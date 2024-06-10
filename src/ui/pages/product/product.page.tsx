'use client';

import React from 'react';

import Image from 'next/image';

import { MainButton } from '@ui/atoms/button/mainButton/mainButton';
import { Caption } from '@ui/atoms/typography/caption/caption';
import { Text } from '@ui/atoms/typography/text/text';
import { Title } from '@ui/atoms/typography/title/title';
import css from '@ui/pages/product/product.module.scss';

import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import example1 from '../../../../public/images/example 1.png';

import { userId } from '@mock/userMock';
import { AddCartItemBody, AddCartItemResponse, CartItemBody } from '@models/cart.model';
import { Product } from '@models/product.model';
import { isTelegram } from '@platform/platform-check';

interface Props {
	data: Product;
	addToCart: (body: AddCartItemBody) => Promise<AddCartItemResponse>;
}

export const ProductPageUI = (props: Props) => {
	const { data, addToCart } = props;
	const { id, info } = data;

	const { name, price, description } = info;

	const isTMA = isTelegram();

	const cartItemBody: CartItemBody = {
		userId,
		productId: id,
		quantity: 1,
	};

	const handleClick = () => addToCart(cartItemBody);

	useMainButtonTelegram(handleClick, 'Add to cart');

	return (
		<div className={css.product} key={id}>
			<Image src={example1} alt={'title'} className={css.product__image} priority />
			<div className={css.product__wrapper}>
				<Title className={css.product__title}>{name}</Title>
				<Text className={css.product__price}>{price} ₽</Text>
				<Caption className={css.product__description}>{description}</Caption>
			</div>
			{!isTMA && <MainButton onClick={handleClick}>Add to cart</MainButton>}
		</div>
	);
};
