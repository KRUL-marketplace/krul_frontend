import { productsMock } from '@app/(mainRoot)/brands/[brand]/[product]/product.mock';
import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';
import { brandMock } from '@app/(mainRoot)/brands/[brand]/brand.mock';
import { Brand } from '@app/(mainRoot)/brands/[brand]/brand.model';

import { API } from '@api/api';

export const getBrandById = async (id: string) => {
	try {
		const response = await fetch(`${API.get.brands.byId(id)}`, {
			headers: {
				Accept: 'application/json',
			},
		});

		const { brand }: { brand: Brand } = await response.json();

		return brand;
	} catch (error) {
		console.error(error);

		return brandMock;
	}
};

export const getProductsByBrandId = async (brandId: string) => {
	try {
		const response = await fetch(`${API.get.products.getByBrandId(brandId)}`, {
			headers: {
				Accept: 'application/json',
			},
			next: { revalidate: 86400000 }, // refreshes every day
		});

		const { products }: { products: Product[] } = await response.json();

		return products.filter(product => product.info.brand.id.toString() === brandId);
	} catch (error) {
		console.error(error);

		return productsMock;
	}
};
