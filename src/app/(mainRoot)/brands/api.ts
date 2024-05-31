import { Brand } from '@app/(mainRoot)/brands/[brand]/brand.model';

import { API } from '@api/api';

export const getBrands = async () => {
	const response = await fetch(`${API.get.brands.getAll}`, {
		headers: {
			Accept: 'application/json',
		},
		next: {
			revalidate: 100000,
		},
	});

	if (!response.ok) {
		// This will activate the closest `error.tsx` Error Boundary
		throw new Error('Failed to fetch data');
	}
	const { brands }: { brands: Brand[] } = await response.json();

	return brands;
};