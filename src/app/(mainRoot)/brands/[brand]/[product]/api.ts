import { productMock } from '@app/(mainRoot)/brands/[brand]/[product]/product.mock';
import { Product } from '@app/(mainRoot)/brands/[brand]/[product]/product.model';

import { API } from '@api/api';

export const getById = async (id: string) => {
	try {
		const response = await fetch(`${API.get.products.getById(id)}`, {
			headers: {
				Accept: 'application/json',
			},
		});

		const { product }: { product: Product } = await response.json();

		return product;
	} catch (error) {
		console.error(error);

		return productMock;
	}
};
