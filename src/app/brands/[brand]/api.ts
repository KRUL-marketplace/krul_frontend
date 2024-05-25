import { Product } from '@app/brands/[brand]/[product]/product.model';
import { Brand } from '@app/brands/[brand]/brand.model';

import { API } from '@api/api';

export const getBrandById = async (id: string) => {
	const response = await fetch(`${API.get.brands.byId(id)}`, {
		headers: {
			Accept: 'application/json',
		},
	});

	if (!response.ok) {
		// This will activate the closest `error.tsx` Error Boundary
		throw new Error('Failed to fetch data');
	}
	const { brand }: { brand: Brand } = await response.json();

	return brand;
};

export const getProductsByBrandId = async (brandId: string) => {
	const response = await fetch(`${API.get.products.getByBrandId(brandId)}`, {
		headers: {
			Accept: 'application/json',
		},
		next: { revalidate: 86400000 }, // refreshes every day
	});

	if (!response.ok) {
		// This will activate the closest `error.tsx` Error Boundary
		throw new Error('Failed to fetch data');
	}
	const { products }: { products: Product[] } = await response.json();

	return products.filter(product => product.info.brand.id.toString() === brandId);
};
