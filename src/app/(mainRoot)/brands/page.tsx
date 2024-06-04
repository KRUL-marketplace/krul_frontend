import React from 'react';

import { getBrands } from '@app/(mainRoot)/brands/api';

import { BrandsPageUI } from '@ui/pages/brands/brands.page';

const BrandsPage = async () => {
	const brands = await getBrands();

	return <BrandsPageUI brands={brands} />;
};

export default BrandsPage;
