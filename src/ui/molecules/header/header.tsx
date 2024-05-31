'use client';

import React from 'react';

import Link from 'next/link';

import { IconButton } from '@/ui/atoms/iconButton/iconButton';
import { Avatar } from '@ui/atoms/avatar/avatar';
import { iconCart } from '@ui/atoms/icons/icon-cart';

import profileSkeleton from '../../../../public/images/profile-skeleton.jpg';

import css from './header.module.scss';
import { ROUTES } from '@api/routes';

interface Props {}

export const Header = ({}: Props) => {
	return (
		<div className={css.header}>
			<Avatar src={profileSkeleton.src} />
			<Link href={ROUTES.cart}>
				<IconButton aria-label={'shopping-(cartRoot)'}>{iconCart}</IconButton>
			</Link>
		</div>
	);
};
