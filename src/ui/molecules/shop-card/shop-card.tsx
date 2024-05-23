import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ShopCardProps } from '@app/shops/[shop]/shop.model';

import { Text } from '@ui/atoms/text/text';

import css from './shop-card.module.scss';

export const ShopCard = async ({ title, image }: ShopCardProps) => {
	return (
		<Link href={`/shops/${title}`} className={css.shopCard}>
			<Image src={image} alt={title} width={300} height={300} className={css.shopCard__image} />
			<Text className={css.shopCard__title}>{title}</Text>
		</Link>
	);
};
