import React from 'react';

import { shopsMockData } from '@app/shops/shops.mock';

import { Grid, GridItem } from '@client/ui/atoms/grid/grid';
import { ShopCardContainer } from '@client/ui/molecules/shop-card/shop-card.container';

import css from './shops.module.scss';

interface Props {}

const Page = ({}: Props) => {
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

export default Page;
