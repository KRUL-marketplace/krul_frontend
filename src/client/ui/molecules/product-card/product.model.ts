import React from 'react';

import { StaticImageData } from 'next/image';

interface ServiceProductProps {
	iconSize?: 'small' | 'medium' | 'large';
	handleFavorite?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface BaseProductProps extends ServiceProductProps {
	title: string;
	image: StaticImageData | string;
	price: number;
	isFavorite?: boolean;
}
