import { Brand } from '@app/brands/[brand]/brand.model';

import { API } from '@api/api';

export const getBrands = async () => {
	const response = await fetch(`${API.get.brands.getAll}`, {
		headers: {
			Accept: 'application/json',
		},
	});

	if (!response.ok) {
		// This will activate the closest `error.tsx` Error Boundary
		throw new Error('Failed to fetch data');
	}
	const { brands }: { brands: Brand[] } = await response.json();

	return brands;
};
