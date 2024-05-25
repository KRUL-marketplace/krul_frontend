import React from 'react';

import { Brand } from '@app/brands/[brand]/brand.model';

interface ServiceProductProps {
	iconSize?: 'small' | 'medium' | 'large';
	handleFavorite?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isFavorite?: boolean;
}

interface Info {
	name: string;
	slug: string;
	description?: string;
	price: number;
	categories: Category[];
	brand: Brand;
}

interface Category {
	id: string;
	info: {
		name: string;
		slug: string;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

export interface Product extends ServiceProductProps {
	id: string;
	info: Info;
	createdAt: string;
	updatedAt: string | null;
}
