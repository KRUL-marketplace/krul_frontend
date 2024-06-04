import React from 'react';

import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';
import { Brand } from '@app/(mainRoot)/brands/[brand]/brand.model';

import { Title } from '@ui/atoms/typography/title/title';
import { Products } from '@ui/organisms/products/products';

interface Props {
	brand: Brand;
	products: Product[];
}

export const BrandPageUI = ({ brand, products }: Props) => {
	return (
		<div className={'container'}>
			<Title level={'1'} caps style={{ textAlign: 'center' }}>
				{brand.info.name}
				brands
			</Title>
			<Products data={products} />
		</div>
	);
};
