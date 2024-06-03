import React from 'react';

import { getById } from '@app/brands/[brand]/[product]/api';
import { Product } from '@app/brands/[brand]/[product]/product.model';

import { ProductPage } from '@ui/pages/product/product.page';

interface ProductsPageParams {
	params: { product: string };
	searchParams: { productId: string };
}

const Page = async (props: ProductsPageParams) => {
	const { searchParams } = props;

	const productId = searchParams.productId;

	const product: Product = await getById(productId);

	return <ProductPage data={product} />;
};

export default Page;
