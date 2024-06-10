import { isDevMode } from '@utils/dev';

import { API } from '@api/api';
import { productMock } from '@mock/product.mock';
import { Product, ProductResponse } from '@models/product.model';

export const getById = async (id: string): Promise<ProductResponse> => {
	try {
		const response = await fetch(`${API.get.product.getById(id)}`, {
			headers: {
				Accept: 'application/json',
			},
		});

		const { product }: { product: Product[] } = await response.json();

		return {
			success: true,
			data: product[0],
		};
	} catch (error) {
		const devSuccessResponse = {
			success: true,
			data: productMock,
		};

		if (isDevMode) {
			return devSuccessResponse;
		} else throw new Error('Error while fetching brands. Please reload the page');
	}
};
