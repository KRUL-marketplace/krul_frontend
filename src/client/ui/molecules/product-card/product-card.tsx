import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IconButton } from '@client/ui/atoms/iconButton/iconButton';
import { BaseProductProps } from '@client/ui/molecules/product-card/product.model';

import cx from 'classnames';

import css from './product-card.module.scss';

export const Product = ({
	title,
	price,
	image,
	isFavorite = true,
	iconSize = 'large',
	handleFavorite,
}: BaseProductProps) => {
	const isFavouriteClass = cx(css.product__favourite, isFavorite ? css.product_favourite_active : '');

	return (
		<Link href={'#'} className={css.product}>
			<Image src={image} alt={title} width={300} height={300} className={css.product__image} />
			<div className={css.product__footer}>
				<div className={css.product__texts}>
					<div className={css.product__title}>{title}</div>
					<div className={css.product__price}>{price} ₽</div>
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
