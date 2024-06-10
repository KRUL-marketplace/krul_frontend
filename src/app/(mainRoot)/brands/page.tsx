import React from 'react';

import { BrandsPageUI } from '@ui/pages/brands/brands.page';

import { getBrands } from '@actions/brands.action';
import { BrandsResponse } from '@models/brand.model';

const isBrandsResponseFailed = (response: BrandsResponse): response is Error => {
	return (response as Error).message !== undefined;
};

const BrandsPage = async () => {
	const brands = await getBrands();

	const successResponse = !isBrandsResponseFailed(brands) && brands.success;

	if (successResponse) {
		return <BrandsPageUI brands={brands.data} />;
	}
};

export default BrandsPage;
