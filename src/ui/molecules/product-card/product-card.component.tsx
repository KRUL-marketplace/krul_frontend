import React from 'react';

import Link from 'next/link';

import { Product } from '@app/brands/[brand]/[product]/product.model';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { Caption, Subheading } from '@ui/atoms/text/text';

import cx from 'classnames';

import css from './product-card.module.scss';
import { ROUTES } from '@api/routes';

export const ProductCardComponent = ({ id, info, isFavorite = true, iconSize = 'large', handleFavorite }: Product) => {
	const { name, price, slug, description, brand } = info;

	const isFavouriteClass = cx(css.product__favourite, isFavorite ? css.product_favourite_active : '');

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
					<Subheading level={'1'} weight={'2'} className={css.product__title} caps plain>
						{name}
					</Subheading>
					<Caption level={'1'} className={css.product__price}>
						{price} ₽
					</Caption>
				</div>
				{isFavorite ? (
					<IconButton
						aria-label={'favourites'}
						className={isFavouriteClass}
						size={iconSize}
						onClick={e => handleFavorite?.(e)}>
						<FavoriteIcon fontSize={iconSize} />
					</IconButton>
				) : (
					<IconButton aria-label={'favourites'} size={iconSize} onClick={e => handleFavorite?.(e)}>
						<FavoriteBorderIcon fontSize={iconSize} />
					</IconButton>
				)}
			</div>
		</Link>
	);
};
