import React from 'react';

import { Title } from '@ui/atoms/typography/title/title';
import { Products } from '@ui/organisms/products/products';

import { Brand } from '@models/brand.model';
import { Product } from '@models/product.model';

interface Props {
	brand: Brand;
	products: Product[];
}

export const BrandPageUI = ({ brand, products }: Props) => {
	return (
		<div className={'container'}>
			<Title level={'1'} caps style={{ textAlign: 'center' }}>
				{brand.info.name}
			</Title>
			<Products data={products} />
		</div>
	);
};
