'use client';

import React from 'react';

import { Product } from '@client/ui/molecules/product-card/product-card';
import { BaseProductProps } from '@client/ui/molecules/product-card/product.model';

export const ProductContainer = (props: BaseProductProps) => {
	const [isFavorite, setIsFavorite] = React.useState<boolean>(false);

	const handleFavorite = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setIsFavorite(!isFavorite);
	};

	return <Product {...props} isFavorite={isFavorite} handleFavorite={handleFavorite} />;
};
