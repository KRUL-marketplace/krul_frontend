'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

import { MainButton } from '@ui/atoms/button/mainButton/mainButton';
import { Caption } from '@ui/atoms/typography/caption/caption';
import { Text } from '@ui/atoms/typography/text/text';
import { Title } from '@ui/atoms/typography/title/title';
import css from '@ui/pages/product/product.module.scss';

import example1 from '../../../../public/images/example 1.png';

import { ROUTES } from '@api/routes';
import { isTelegram } from '@platform/platform-check';

interface Props {
	data: Product;
}

export const ProductPageUI = ({ data }: Props) => {
	const { id, info } = data;
	const { name, price, description } = info;
	const { push } = useRouter();

	const isTMA = isTelegram();

	const handleClick = () => push(ROUTES.checkout);

	return (
		<div className={css.product} key={id}>
			<Image src={example1} alt={'title'} className={css.product__image} priority />
			<div className={css.product__wrapper}>
				<Title className={css.product__title}>{name}</Title>
				<Text className={css.product__price}>{price} ₽</Text>
				<Caption className={css.product__description}>{description}</Caption>
			</div>
			{!isTMA && <MainButton onClick={handleClick}>Shop</MainButton>}
		</div>
	);
};
