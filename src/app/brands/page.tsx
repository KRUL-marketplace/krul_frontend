import React from 'react';

import { getBrands } from '@app/brands/api';

import { Grid, GridItem } from '@ui/atoms/grid/grid';
import { Title } from '@ui/atoms/text/text';
import { BrandContainer } from '@ui/molecules/brand-card/brand-card.container';

import css from './brands.module.scss';

const BrandsPage = async () => {
	const brands = await getBrands();

	return (
		<>
			<Title level={'1'} className={css.shops__title}>
				Магазины
			</Title>
			<Grid spacing={2}>
				{brands.map(item => {
					const id = item.id;

					return (
						<GridItem item xs={10} sm={6} md={5} lg={3} key={id}>
							<BrandContainer id={id} info={item.info} />
						</GridItem>
					);
				})}
			</Grid>
		</>
	);
};

export default BrandsPage;
