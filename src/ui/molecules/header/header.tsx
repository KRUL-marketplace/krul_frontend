'use client';

import { useThemeParams } from '@tma.js/sdk-react';
import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ShoppingBagOutlined from '@mui/icons-material/ShoppingBagOutlined';

import { IconButton } from '@/ui/atoms/iconButton/iconButton';
import { Avatar } from '@ui/atoms/avatar/avatar';

import profileSkeleton from '../../../../public/images/profile-skeleton.jpg';

import css from './header.module.scss';
import { platform } from '@platform/platform';

interface Props {}

export const Header = ({}: Props) => {
	const pathname = usePathname();

	const theme = platform.getTheme();
	console.log(theme.headerBackgroundColor);
	return (
		<div className={css.header} style={{ background: pathname === '/' ? theme.headerBackgroundColor : undefined }}>
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
			<Avatar src={profileSkeleton.src} />
			<div className={css.header_icons}>
				{/*<Link href={'#'} className={css.header_favourites}>*/}
				{/*	<IconButton size={'large'} aria-label={'favourites'}>*/}
				{/*		<FavoriteBorder fontSize={'large'} />*/}
				{/*	</IconButton>*/}
				{/*</Link>*/}
				<Link href={'#'} className={css.header_cart}>
					<IconButton size={'large'} aria-label={'shopping-cart'}>
						<ShoppingBagOutlined fontSize={'large'} style={{ filter: pathname === '/' ? 'invert(100%)' : undefined }} />
					</IconButton>
				</Link>
			</div>
		</div>
	);
};
