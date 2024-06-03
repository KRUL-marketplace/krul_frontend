'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Brand } from '@app/(mainRoot)/brands/[brand]/brand.model';
import { Card } from '@telegram-apps/telegram-ui';
import { CardCell } from '@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardCell/CardCell';

import { Text } from '@ui/atoms/typography/text/text';

import imageExample from '../../../../public/images/Queens.jpg';

import css from './brand-card.module.scss';
import { ROUTES } from '@api/routes';

export const BrandComponent = ({ id, info }: Brand) => {
	const { name, slug } = info;

	return (
		<Link href={{ pathname: ROUTES.brands.brand(slug), query: { brandId: id } }}>
			<Card type="ambient">
				<React.Fragment key=".0">
					<Image src={imageExample} alt={name} className={css.brandCard__image} />

					<CardCell readOnly className={css.brandCard__cell}>
						<Text>{name}</Text>
					</CardCell>
				</React.Fragment>
			</Card>
		</Link>
	);
};
