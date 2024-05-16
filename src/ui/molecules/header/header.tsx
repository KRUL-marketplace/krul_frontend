'use client';

import React from 'react';

import Link from 'next/link';

import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';

import { IconButton } from '@/ui/atoms/iconButton/iconButton';
import { Avatar } from '@ui/atoms/avatar/avatar';

import css from './header.module.scss';

interface Props {}

export const Header = ({}: Props) => {
	return (
		<div className={css.header}>
			{/*<Media at="mobile">*/}
			{/*	<div className={menuClass}>*/}
			{/*		<Menu />*/}
			{/*	</div>*/}
			{/*</Media>*/}
			{/*<Media greaterThan="mobile">*/}
			{/*	<div className={logoClass}>*/}
			{/*		<Link href="/">{iconLogo}</Link>*/}
			{/*	</div>*/}
			{/*</Media>*/}
			{/*<Media at="mobile">*/}
			{/*	<Link href="/">{iconLogo}</Link>*/}
			{/*</Media>*/}
			<Avatar />
			<div className={css.header_icons}>
				<Link href={'#'} className={css.header_favourites}>
					<IconButton size={'large'} aria-label={'favourites'}>
						<FavoriteBorder fontSize={'large'} />
					</IconButton>
				</Link>
				<Link href={'#'} className={css.header_cart}>
					<IconButton size={'large'} aria-label={'shopping-cart'}>
						<ShoppingBagOutlined fontSize={'large'} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};
