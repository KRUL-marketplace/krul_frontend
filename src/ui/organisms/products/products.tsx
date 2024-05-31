import React from 'react';

import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

import { Grid, GridItem } from '@ui/atoms/grid/grid';
import { ProductContainer } from '@ui/molecules/product-card/product-card.container';

interface Props<T> {
	data: T[];
}

export const Products = <T extends Product>({ data }: Props<T>) => {
	return (
		<Grid spacing={2}>
			{data.map((item: T, index) => (
				<GridItem item xs={6} sm={6} md={3} lg={3} key={index}>
					<ProductContainer {...item} />
				</GridItem>
			))}
		</Grid>
	);
};
