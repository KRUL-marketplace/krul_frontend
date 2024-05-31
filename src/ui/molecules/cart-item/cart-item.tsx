'use client';

import React from 'react';

import Image from 'next/image';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { iconAdd } from '@ui/atoms/icons/icon-add';
import { iconBin } from '@ui/atoms/icons/icon-bin';
import { iconRemove } from '@ui/atoms/icons/icon-remove';
import { Caption } from '@ui/atoms/typography/caption/caption';
import { Text } from '@ui/atoms/typography/text/text';

import example from '../../../../public/images/example 2.png';

import css from './cart-item.module.scss';

interface Props {}

export const CartItem = ({}: Props) => {
	return (
		<div className={css.cartItem}>
			<div className={css.cartItem__imageWrapper}>
				<Image src={example} alt={''} className={css.cartItem__image} />
			</div>
			<div className={css.cartItem__infoOutter}>
				<Text>U.S. Polo</Text>
				<Caption>70 $</Caption>
				<div className={css.cartItem__icons}>
					<IconButton>{iconRemove}</IconButton>
					<Text>1</Text>
					<IconButton>{iconAdd}</IconButton>
				</div>
			</div>
			<IconButton>{iconBin}</IconButton>
		</div>
	);
};
