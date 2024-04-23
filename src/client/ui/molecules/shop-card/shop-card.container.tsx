import React from 'react';

import { StaticImageData } from 'next/image';

import { ShopCard } from '@/client/ui/molecules/shop-card/shop-card';

export interface ShopCardProps {
	title: string;
	image: StaticImageData | string;
}

export const ShopCardContainer = (props: ShopCardProps) => {
	return <ShopCard {...props} />;
};
