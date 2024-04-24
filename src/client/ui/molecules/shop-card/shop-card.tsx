import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { ShopCardProps } from '@client/ui/molecules/shop-card/shop-card.container';

import css from './shop-card.module.scss';

export const ShopCard = ({ title, image }: ShopCardProps) => {
	return (
		<Link href={`/shops/${title}`} className={css.shopCard}>
			<Image src={image} alt={title} width={300} height={300} className={css.shopCard__image} />
			<h3 className={css.shopCard__title}>{title}</h3>
		</Link>
	);
};
