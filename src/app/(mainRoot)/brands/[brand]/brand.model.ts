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
