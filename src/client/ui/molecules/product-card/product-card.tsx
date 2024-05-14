import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { BaseProduct } from '@app/shops/[shop]/[product]/product.model';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { IconButton } from '@client/ui/atoms/iconButton/iconButton';

import cx from 'classnames';

import css from './product-card.module.scss';

export const Product = ({
	title,
	price,
	image,
	isFavorite = true,
	iconSize = 'large',
	handleFavorite,
}: BaseProduct) => {
	const isFavouriteClass = cx(css.product__favourite, isFavorite ? css.product_favourite_active : '');

	return (
		<Link href={`/shops/Queens/${title}`} className={css.product}>
			<div className={css.product__imageWrapper}>
				<Image
					src={image}
					alt={title}
					className={css.product__image}
					layout={'fill'}
					objectFit={'cover'}
					objectPosition={'center'}
				/>
			</div>
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
