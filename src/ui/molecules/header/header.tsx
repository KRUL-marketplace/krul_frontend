'use client';

import React from 'react';

import Link from 'next/link';

import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';

import { IconButton } from '@/ui/atoms/iconButton/iconButton';
import { Avatar } from '@ui/atoms/avatar/avatar';

import profileSkeleton from '../../../../public/images/profile-skeleton.jpg';

import css from './header.module.scss';

interface Props {}

export const Header = ({}: Props) => {
	return (
		<div className={css.header}>
			<Avatar src={profileSkeleton.src} />
			<Link href={'#'}>
				<IconButton size={'l'} mode={'outline'} aria-label={'shopping-cart'}>
					<ShoppingBagOutlined fontSize={'large'} />
				</IconButton>
			</Link>
		</div>
	);
};
