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
		product: {
			getById: (id: string) => string;
		};
		cart: {
			getByUserId: (id: string) => string;
		};
	};
	post: {
		cart: {
			addProduct: string;
		};
	};
	delete: {
		cart: {
			deleteProduct: string;
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
		product: {
			getById: (id: string) => `${process.env.DEV_API_URL}/product/${id}`,
		},
		cart: {
			getByUserId: (id: string) => `${process.env.CART_DEV_API_URL}/cart/user/${id}`,
		},
	},
	post: {
		cart: {
			addProduct: `${process.env.CART_DEV_API_URL}/cart/add`,
		},
	},
	delete: {
		cart: {
			deleteProduct: `${process.env.CART_DEV_API_URL}/cart/delete`,
		},
	},
};
