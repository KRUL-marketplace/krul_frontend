'use client';

import React from 'react';

import { ProductCardComponent } from '@ui/molecules/product-card/product-card.component';

import { Product } from '@models/product.model';

export const ProductContainer = (props: Product) => {
	const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

	const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsFavorite(!isFavorite);
	};

	return <ProductCardComponent {...props} isFavorite={isFavorite} handleFavorite={handleFavorite} />;
};
