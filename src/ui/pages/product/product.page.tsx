'use client';

import React from 'react';

import Image from 'next/image';

import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

import { Text } from '@ui/atoms/typography/text/text';
import css from '@ui/pages/product/product.module.scss';

import example1 from '../../../../public/images/example 1.png';

interface Props {
	data: Product;
}

export const ProductPage = ({ data }: Props) => {
	const { id, info } = data;
	const { name, price, brand, description } = info;

	return (
		<div className={css.product} key={id}>
			<Image src={example1} alt={'title'} className={css.product__image} priority />
			<div className={css.product__wrapper}>
				<Text className={css.product__title}>{name}</Text>
				<Text className={css.product__price}>{price} ₽</Text>
			</div>
		</div>
	);
};
