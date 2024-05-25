import React from 'react';

import Image from 'next/image';

import { getById } from '@app/brands/[brand]/[product]/api';
import { Product } from '@app/brands/[brand]/[product]/product.model';

import { Button } from '@mui/material';

import css from '../../../../ui/pages/product.module.scss';
import { Text } from '@ui/atoms/text/text';
import { ProductPage } from '@ui/pages/product.page';

import example1 from '../../../../../public/images/example 1.png';

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
