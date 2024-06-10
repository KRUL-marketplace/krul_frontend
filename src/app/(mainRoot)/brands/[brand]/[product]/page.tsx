import React from 'react';

import { ProductPageUI } from '@ui/pages/product/product.page';

import { addCartItem } from '@actions/cart.action';
import { getById } from '@actions/product.action';
import { AddCartItemBody } from '@models/cart.model';
import { ProductResponse } from '@models/product.model';

interface ProductsPageParams {
	params: { product: string };
	searchParams: { productId: string };
}

const isProductResponseFailed = (response: ProductResponse): response is Error => {
	return (response as Error).message !== undefined;
};

const Page = async (props: ProductsPageParams) => {
	const addToCart = async (body: AddCartItemBody) => {
		'use server';

		return await addCartItem(body);
	};

	const { searchParams } = props;

	const productId = searchParams.productId;

	const product = await getById(productId);

	const successResponse = !isProductResponseFailed(product) && product.success;

	if (successResponse) {
		return <ProductPageUI data={product.data} addToCart={addToCart} />;
	}
};

export default Page;
