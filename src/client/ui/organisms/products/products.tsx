import React from 'react';

import { Grid, GridItem } from '@client/ui/atoms/grid/grid';
import { ProductContainer } from '@client/ui/molecules/product-card/product-card.container';
import { productsMockData } from '@client/ui/organisms/products/products.mock';

interface Props {}

export const Products = ({}: Props) => {
	return (
		<Grid spacing={2}>
			{productsMockData.map(item => (
				<GridItem item xs={6} sm={6} md={3} lg={3}>
					<ProductContainer title={item.title} image={item.image} price={item.price} isFavorite={item.isFavorite} />
				</GridItem>
			))}
		</Grid>
	);
};
