import { AddCartItemBody, DeleteCartItemBody } from '@app/(cartRoot)/cart/cart.model';

interface IAPI {
	get: {
		brands: {
			getAll: string;
			byId: (id: string) => string;
			bySlug: (slug: string) => string;
		};
		products: {
			getAll: string;
			getByBrandId: (id: string) => string;
			getById: (id: string) => string;
		};
		cart: {
			getAll: string;
		};
	};
	post: {
		cart: {
			cartProduct: (body: AddCartItemBody) => string;
		};
	};
	delete: {
		cart: {
			cartProduct: (body: DeleteCartItemBody) => string;
		};
	};
}

export const API: IAPI = {
	get: {
		brands: {
			getAll: `${process.env.DEV_API_URL}/brands`,
			byId: (id: string) => `${process.env.DEV_API_URL}/brand/${id}`,
			bySlug: (slug: string) => `${process.env.DEV_API_URL}/brand/by-slug/${slug}`,
		},
		products: {
			getAll: `${process.env.DEV_API_URL}/products`,
			getByBrandId: (id: string) => `${process.env.DEV_API_URL}/products/brand/${id}`,
			getById: (id: string) => `${process.env.DEV_API_URL}/product/${id}`,
		},
		cart: {
			getAll: `${process.env.DEV_API_URL}/cartProducts`,
		},
	},
	post: {
		cart: {
			cartProduct: (body: AddCartItemBody) => `${process.env.DEV_API_URL}/cartProduct/${body}`,
		},
	},
	delete: {
		cart: {
			cartProduct: (id: DeleteCartItemBody) => `${process.env.DEV_API_URL}/cartProduct/${id}`,
		},
	},
};
