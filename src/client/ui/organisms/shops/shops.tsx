'use client';

import React from 'react';

import { ShopCardContainer } from '@/client/ui/molecules/shop-card/shop-card.container';
import { Grid, GridItem } from '@client/ui/atoms/grid/grid';
import { shopsMockData } from '@client/ui/organisms/shops/shops.mock';

import css from './shops.module.scss';

interface Props {}

export const Shops = ({}: Props) => {
	return (
		<div className={css.shops}>
			<h1 className={css.shops__title}>Магазины</h1>
			<Grid spacing={2}>
				{shopsMockData.map(item => (
					<GridItem item xs={10} sm={6} md={5} lg={3}>
						<ShopCardContainer title={item.title} image={item.image} />
					</GridItem>
				))}
			</Grid>
		</div>
	);
};
