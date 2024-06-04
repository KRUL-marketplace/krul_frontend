'use client';

import React from 'react';

import Image from 'next/image';

import { Caption } from '@ui/atoms/typography/caption/caption';
import { Subheadline } from '@ui/atoms/typography/subheadline/subheadline';
import { Text } from '@ui/atoms/typography/text/text';

import css from './cell.module.scss';

interface Props {
	image: string;
	title: string;
	subtitle?: string;
	caption?: string;
	actionBottom?: React.ReactNode;
	actionRight?: React.ReactNode;
}

export const Cell = ({ image, title, subtitle, caption, actionBottom, actionRight }: Props) => {
	return (
		<div className={css.cell}>
			<div className={css.cell__imageWrapper}>
				<Image src={image} alt={title} width={96} height={96} className={css.cell__image} />
			</div>
			<div className={css.cell__infoOutter}>
				<Text>{title}</Text>
				{!!subtitle && <Subheadline>{subtitle}</Subheadline>}
				{!!caption && <Caption>{caption}</Caption>}
				{!!actionBottom && actionBottom}
			</div>
			{!!actionRight && actionRight}
		</div>
	);
};
