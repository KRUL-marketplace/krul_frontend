import React from 'react';

import { Brand } from '@app/brands/[brand]/brand.model';

import { BrandComponent } from '@ui/molecules/brand-card/brand-card';

export const BrandContainer = (props: Brand) => {
	return <BrandComponent {...props} />;
};
