import React from 'react';

import { ShopCardProps } from '@app/shops/[shop]/shop.model';

import { ShopCard } from '@/ui/molecules/shop-card/shop-card';

export const ShopCardContainer = (props: ShopCardProps) => {
	return <ShopCard {...props} />;
};
