import React from 'react';

import Link from 'next/link';

import { IconButton } from '@/client/ui/atoms/iconButton/iconButton';
import { iconCart } from '@/client/ui/atoms/icons/icon-cart';
import { iconLogo } from '@/client/ui/atoms/icons/icon-logo';
import { iconSearch } from '@/client/ui/atoms/icons/icon-search';
import { Menu } from '@/client/ui/molecules/menu/menu';

import cx from 'classnames';

import css from './header.module.scss';

interface Props {}

export const Header = ({}: Props) => {
	return (
		<div className={cx(css.header, 'container')}>
			<Menu />
			<div className={css.header_logo}>
				<Link href="/">{iconLogo}</Link>
			</div>
			<div className={css.header_icons}>
				<div className={css.header_search}>
					<IconButton aria-label={'search'} icon={iconSearch} />
				</div>
				<div className={css.header_cart}>
					<IconButton aria-label={'shopping-cart'} icon={iconCart} />
				</div>
			</div>
		</div>
		// <Grid gridTemplateColumns={'3rem 10rem 3rem 3rem 1fr'} gap={6}>
		// 	<GridItem colSpan={1}>
		// 		<IconButton icon={iconSearch} aria-label={'search'} />
		// 	</GridItem>
		// 	<GridItem>
		// 		<div>KRUL</div>
		// 	</GridItem>
		// 	<GridItem>
		// 		<IconButton aria-label={'search'} icon={iconSearch} />
		// 	</GridItem>
		// 	<GridItem>
		// 		<IconButton aria-label={'search'} icon={iconCart} />
		// 	</GridItem>
		// </Grid>
	);
};
