import { brandMock } from '@app/(mainRoot)/brands/[brand]/brand.mock';
import { Brand } from '@app/(mainRoot)/brands/[brand]/brand.model';

import { API } from '@api/api';

export const getBrands = async () => {
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

		return brands;
	} catch (error) {
		console.error(error);

		return brandMock;
	}
};
