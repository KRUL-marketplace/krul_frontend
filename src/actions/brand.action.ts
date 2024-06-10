import { isDevMode } from '@utils/dev';

import { API } from '@api/api';
import { brandMock } from '@mock/brand.mock';
import { productsMock } from '@mock/product.mock';
import { Brand, BrandResponse } from '@models/brand.model';
import { Product, ProductsResponse } from '@models/product.model';

export const getBrandById = async (id: string): Promise<BrandResponse> => {
	try {
		const response = await fetch(`${API.get.brands.byId(id)}`, {
			headers: {
				Accept: 'application/json',
			},
		});

		const { brand }: { brand: Brand } = await response.json();

		return {
			success: true,
			data: brand,
		};
	} catch (error) {
		const devSuccessResponse = {
			success: true,
			data: brandMock,
		};

		if (isDevMode) {
			return devSuccessResponse;
		} else throw new Error('Error while fetching the brand. Please reload the page');
	}
};

export const getProductsByBrandId = async (brandId: string): Promise<ProductsResponse> => {
	try {
		const response = await fetch(`${API.get.products.getByBrandId(brandId)}`, {
			headers: {
				Accept: 'application/json',
			},
			next: { revalidate: 86400000 }, // refreshes every day
		});

		const { products }: { products: Product[] } = await response.json();

		return {
			success: true,
			data: products.filter(product => product.info.brand.id.toString() === brandId),
		};
	} catch (error) {
		const devSuccessResponse = {
			success: true,
			data: productsMock,
		};

		if (isDevMode) {
			return devSuccessResponse;
		} else throw new Error('Error while fetching brands. Please reload the page');
	}
};
