export const ROUTES = {
	brands: {
		all: '/brands',
		brand: (slug: string) => `/brands/${slug}`,
	},
	products: {
		all: '/products',
		product: (brand: string, slug: string) => `/brands/${brand}/${slug}`,
	},
	cart: '/cart',
};
