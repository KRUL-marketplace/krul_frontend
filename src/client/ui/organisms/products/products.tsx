import React from 'react';

import { BaseProduct } from '@app/shops/[shop]/[product]/product.model';

import { Grid, GridItem } from '@client/ui/atoms/grid/grid';
import { ProductContainer } from '@client/ui/molecules/product-card/product-card.container';

interface Props<T> {
	data: T[];
}

export const Products = <T extends BaseProduct>({ data }: Props<T>) => {
	return (
		<Grid spacing={2}>
			{data.map((item: T) => (
				<GridItem item xs={6} sm={6} md={3} lg={3}>
					<ProductContainer title={item.title} image={item.image} price={item.price} isFavorite={item.isFavorite} />
				</GridItem>
			))}
		</Grid>
	);
};
