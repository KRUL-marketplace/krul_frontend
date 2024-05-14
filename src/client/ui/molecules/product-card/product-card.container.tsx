'use client';

import React from 'react';

import { BaseProduct } from '@app/shops/[shop]/[product]/product.model';

import { Product } from '@client/ui/molecules/product-card/product-card';

export const ProductContainer = (props: BaseProduct) => {
	const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

	const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsFavorite(!isFavorite);
	};

	return <Product {...props} isFavorite={isFavorite} handleFavorite={handleFavorite} />;
};
