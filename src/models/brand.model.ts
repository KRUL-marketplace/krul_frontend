export interface Brand {
	id: string;
	info: {
		name: string;
		slug: string;
		description?: string;
	};
	createdAt?: Date;
	updatedAt?: Date;
}

export interface BrandResponseSuccess {
	success: boolean;
	data: Brand;
}

export type BrandResponse = BrandResponseSuccess | Error;

export interface BrandsResponseSuccess {
	success: boolean;
	data: Brand[];
}

export type BrandsResponse = BrandsResponseSuccess | Error;
