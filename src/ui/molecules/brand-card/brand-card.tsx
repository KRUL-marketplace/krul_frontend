import React from 'react';

import Link from 'next/link';

import { Brand } from '@app/brands/[brand]/brand.model';

import { Text } from '@ui/atoms/text/text';

import css from './brand-card.module.scss';
import { ROUTES } from '@api/routes';

export const BrandComponent = ({ id, info }: Brand) => {
	const { name, description, slug } = info;

	return (
		<Link href={{ pathname: ROUTES.brands.brand(slug), query: { brandId: id } }} className={css.brandCard}>
			{/*<Image src={image} alt={title} width={300} height={300} className={css.brandCard__image} />*/}
			<Text className={css.brandCard__title}>{name}</Text>
		</Link>
	);
};
