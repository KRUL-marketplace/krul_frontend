import { Cart } from '@models/cart.model';

export const cartMock: Cart = {
	cartId: '1',
	userId: '1',
	products: [
		{
			productId: 'mock id',
			itemId: 'itemId',
			quantity: 2,
			info: {
				name: 'U.S. Polo',
				slug: 'u.s. polo',
				description: 'Polo t-shirt description',
				price: 4500,
				image: 'mock image',
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
			productId: 'mock id 2',
			itemId: 'itemId 2',
			quantity: 1,
			info: {
				name: 'Lacoste',
				slug: 'lacoste',
				description: 'Lacoste t-shirt description',
				price: 8500,
				image: 'mock image',
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
	],
	createdAt: '2021-07-21T15:33:00.000Z',
	updatedAt: '2021-07-21T15:33:00.000Z',
	totalPrice: 4500,
};
