import React, { Profiler } from 'react';

import { Grid, GridItem } from '@ui/atoms/grid/grid';
import { Title } from '@ui/atoms/typography/title/title';
import { BrandCard } from '@ui/molecules/brand-card/brand-card';

import css from './brands.module.scss';
import { Brand } from '@models/brand.model';

interface Props {
	brands: Brand[];
}

export const BrandsPageUI = ({ brands }: Props) => {
	return (
		<div className={'container'}>
			<Title level={'1'} className={css.brands__title}>
				Магазины
			</Title>
			<Grid spacing={2} justifyContent={'flex-start'}>
				{brands.map(item => {
					const id = item.id;

					return (
						<GridItem item xs={6} sm={6} md={5} lg={3} key={id}>
							<BrandCard key={item.id} id={id} info={item.info} />
						</GridItem>
					);
				})}
			</Grid>
		</div>
	);
};
