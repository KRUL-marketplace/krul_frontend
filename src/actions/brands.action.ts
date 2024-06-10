import { isDevMode } from '@utils/dev';

import { API } from '@api/api';
import { brandsMock } from '@mock/brands.mock';
import { Brand, BrandsResponse } from '@models/brand.model';

export const getBrands = async (): Promise<BrandsResponse> => {
	try {
		const response = await fetch(`${API.get.brands.getAll}`, {
			headers: {
				Accept: 'application/json',
			},
			next: {
				revalidate: 100000,
			},
		});

		const { brands }: { brands: Brand[] } = await response.json();

		return {
			success: true,
			data: brands,
		};
	} catch (error) {
		const devSuccessResponse = {
			success: true,
			data: brandsMock,
		};

		if (isDevMode) {
			return devSuccessResponse;
		} else throw new Error('Error while fetching brands. Please reload the page');
	}
};
