import React from 'react';

import { Brand } from '@models/brand.model';

interface ServiceProductProps {
	iconSize?: 's' | 'm' | 'l';
	iconMode?: 'plain' | 'outline' | 'bezeled' | 'gray' | undefined;
	handleFavorite?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isFavorite?: boolean;
}

export interface ProductInfo {
	name: string;
	slug: string;
	image: string;
	description?: string;
	price: number;
	categories?: Category[];
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
	info: ProductInfo;
	createdAt?: string;
	updatedAt?: string | null;
}

export interface ProductsResponseSuccess {
	success: boolean;
	data: Product[];
}

export type ProductsResponse = ProductsResponseSuccess | Error;

export interface ProductResponseSuccess {
	success: boolean;
	data: Product;
}

export type ProductResponse = ProductResponseSuccess | Error;
