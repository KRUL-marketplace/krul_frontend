'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Text } from '@ui/atoms/typography/text/text';

import imageExample from '../../../../public/images/Queens.jpg';

import css from './brand-card.module.scss';
import { ROUTES } from '@api/routes';
import { Brand } from '@models/brand.model';

export const BrandCard = ({ id, info }: Brand) => {
	const { name, slug } = info;

	return (
		<Link href={{ pathname: ROUTES.brands.brand(slug), query: { brandId: id } }} className={css.brandCard}>
			<Image src={imageExample} alt={name} fill className={css.brandCard__image} />
			<div className={css.brandCard__cell}>
				<Text>{name}</Text>
			</div>
		</Link>
	);
};
