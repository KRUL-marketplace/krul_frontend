'use client';

import React from 'react';

import Link from 'next/link';

import { IconButton } from '@/client/ui/atoms/iconButton/iconButton';
import { iconCart } from '@/client/ui/atoms/icons/icon-cart';
import { iconFavourites } from '@/client/ui/atoms/icons/icon-favourites';
import { iconLogo } from '@/client/ui/atoms/icons/icon-logo';
import { iconProfile } from '@/client/ui/atoms/icons/icon-profile';
import { Media } from '@/client/ui/helpers/media';
import { Menu } from '@/client/ui/molecules/menu/menu';

import cx from 'classnames';

import css from './header.module.scss';

interface Props {}

export const Header = ({}: Props) => {
	const baseClass = cx(css.header, 'container');
	const menuClass = cx(css.header_menu);
	const logoClass = cx(css.header_logo);
	const iconsClass = cx(css.header_icons);
	const cartIconClass = cx(css.header_cart);
	const profileIconClass = cx(css.header_profile);
	const favouritesIconClass = cx(css.header_favourites);

	return (
		<div className={baseClass}>
			<Media at="mobile">
				<div className={menuClass}>
					<Menu />
				</div>
			</Media>
			<Media greaterThan="mobile">
				<div className={logoClass}>
					<Link href="/">{iconLogo}</Link>
				</div>
			</Media>
			<Media at="mobile">
				<Link href="/">{iconLogo}</Link>
			</Media>
			<div className={iconsClass}>
				<div className={profileIconClass}>
					<IconButton aria-label={'profile'} icon={iconProfile} />
				</div>
				<div className={favouritesIconClass}>
					<IconButton aria-label={'favourites'} icon={iconFavourites} />
				</div>
				<div className={cartIconClass}>
					<IconButton aria-label={'shopping-cart'} icon={iconCart} />
				</div>
			</div>
		</div>
	);
};
