import React from 'react';

import Link from 'next/link';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { iconFavourites } from '@ui/atoms/icons/icon-favourites';
import { Caption } from '@ui/atoms/typography/caption/caption';
import { Text } from '@ui/atoms/typography/text/text';

import css from './product-card.module.scss';
import { ROUTES } from '@api/routes';
import { Product } from '@models/product.model';

export const ProductCardComponent = ({ id, info, isFavorite = true, handleFavorite }: Product) => {
	const { name, price, slug, brand } = info;

	const isFavouriteClass = isFavorite ? css.product_favourite_active : undefined;

	return (
		<Link
			href={{ pathname: ROUTES.products.product(brand.info.slug, slug), query: { productId: id } }}
			className={css.product}>
			<div className={css.product__imageWrapper}>
				{/*<Image*/}
				{/*	src={image}*/}
				{/*	alt={title}*/}
				{/*	className={css.product__image}*/}
				{/*	layout={'fill'}*/}
				{/*	objectFit={'cover'}*/}
				{/*	objectPosition={'center'}*/}
				{/*/>*/}
			</div>
			<div className={css.product__footer}>
				<div className={css.product__texts}>
					<Text weight={'2'} className={css.product__title} caps>
						{name}
					</Text>
					<Caption level={'1'} className={css.product__price}>
						{price} ₽
					</Caption>
				</div>

				<IconButton
					aria-label={'favourites'}
					mode={isFavorite ? 'bezeled' : 'outline'}
					className={isFavouriteClass}
					onClick={e => handleFavorite?.(e)}>
					{iconFavourites}
				</IconButton>
			</div>
		</Link>
	);
};
