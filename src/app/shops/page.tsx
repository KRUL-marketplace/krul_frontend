import React from 'react';

import { Grid, GridItem } from '@client/ui/atoms/grid/grid';
import { ShopCardContainer } from '@client/ui/molecules/shop-card/shop-card.container';

import { v4 as uuid } from 'uuid';

import css from './shops.module.scss';

interface Props {}

async function getShops() {
	const response = await fetch('http://localhost:5001/shops');

	if (!response.ok) {
		// This will activate the closest `error.tsx` Error Boundary
		throw new Error('Failed to fetch data');
	}

	return response.json();
}

const Page = async ({}: Props) => {
	const shops: any[] = await getShops();

	return (
		<div className={css.shops}>
			<h1 className={css.shops__title}>Магазины</h1>
			<Grid spacing={2}>
				{shops.map(item => {
					const id = uuid();
					return (
						<GridItem item xs={10} sm={6} md={5} lg={3} key={id}>
							<ShopCardContainer id={id} title={item.title} image={item.image} />
						</GridItem>
					);
				})}
			</Grid>
		</div>
	);
};

export default Page;
