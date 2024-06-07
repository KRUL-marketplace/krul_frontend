import { CartItem } from '@app/(cartRoot)/cart/cart.model';

export const cartMock: CartItem[] = [
	{
		id: 'mock id',
		quantity: 2,
		info: {
			name: 'U.S. Polo',
			slug: 'u.s. polo',
			description: 'Polo t-shirt description',
			price: 4500,
			brand: {
				id: 'mock id',
				info: {
					name: 'Test Polo',
					slug: 'test-polo',
					description: 'test description',
				},
			},
		},
	},
	{
		id: 'mock id',
		quantity: 1,
		info: {
			name: 'Lacoste',
			slug: 'lacoste',
			description: 'Lacoste t-shirt description',
			price: 8500,
			brand: {
				id: 'mock id',
				info: {
					name: 'Test Lacoste',
					slug: 'test-Lacoste',
					description: 'test description',
				},
			},
		},
	},
];
