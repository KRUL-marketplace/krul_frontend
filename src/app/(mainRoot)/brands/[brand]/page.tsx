import React from 'react';

import { BrandPageUI } from '@ui/pages/brand/brand.page';

import { getBrandById, getProductsByBrandId } from '@actions/brand.action';
import { BrandResponse } from '@models/brand.model';
import { ProductsResponse } from '@models/product.model';

interface BrandsPageParams {
	params: { brand: string };
	searchParams: { brandId: string };
}

const isBrandResponseFailed = (response: BrandResponse): response is Error => {
	return (response as Error).message !== undefined;
};

const isProductsResponseFailed = (response: ProductsResponse): response is Error => {
	return (response as Error).message !== undefined;
};

const BrandPage = async (props: BrandsPageParams) => {
	const { searchParams } = props;

	const brandId = searchParams.brandId;

	const brand = await getBrandById(brandId);
	const products = await getProductsByBrandId(brandId);

	const successBrandResponse = !isBrandResponseFailed(brand) && brand.success;
	const successProductsResponse = !isProductsResponseFailed(products) && products.success;

	if (successBrandResponse && successProductsResponse) {
		return <BrandPageUI brand={brand.data} products={products.data} />;
	}
};

export default BrandPage;
