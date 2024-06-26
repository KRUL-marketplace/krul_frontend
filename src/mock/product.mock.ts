import { Product } from '@models/product.model';

export const productMock: Product = {
	id: 'mock id',
	info: {
		name: 'U.S. Polo',
		slug: 'u.s. polo',
		image: 'mock image',
		description: 'Polo t-shirt description',
		price: 4500,
		categories: [
			{
				id: 'mock id',
				info: {
					name: 'T-shirt',
					slug: 't-shirt',
				},
			},
		],
		brand: {
			id: 'mock id',
			info: {
				name: 'Test Polo',
				slug: 'test-polo',
				description: 'test description',
			},
		},
	},
};

export const productsMock: Product[] = [productMock, productMock];
