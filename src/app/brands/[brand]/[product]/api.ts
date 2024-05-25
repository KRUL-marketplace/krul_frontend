import { Product } from '@app/brands/[brand]/[product]/product.model';

import { API } from '@api/api';

export const getById = async (id: string) => {
	const response = await fetch(`${API.get.products.getById(id)}`, {
		headers: {
			Accept: 'application/json',
		},
	});

	if (!response.ok) {
		// This will activate the closest `error.tsx` Error Boundary
		throw new Error('Failed to fetch data');
	}
	const { product }: { product: Product } = await response.json();

	return product;
};
