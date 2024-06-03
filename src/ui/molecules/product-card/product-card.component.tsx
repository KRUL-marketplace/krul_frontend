import React from 'react';

import Link from 'next/link';

import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { iconFavourites } from '@ui/atoms/icons/icon-favourites';
import { Caption } from '@ui/atoms/typography/caption/caption';
import { Subheadline } from '@ui/atoms/typography/subheadline/subheadline';

import cx from 'classnames';

import css from './product-card.module.scss';
import { ROUTES } from '@api/routes';

export const ProductCardComponent = ({ id, info, isFavorite = true, handleFavorite }: Product) => {
	const { name, price, slug, description, brand } = info;

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
					<Subheadline level={'1'} weight={'2'} className={css.product__title} caps plain>
						{name}
					</Subheadline>
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
