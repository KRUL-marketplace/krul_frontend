'use client';

import React from 'react';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

import { MainButton } from '@ui/atoms/button/mainButton/mainButton';
import { Caption } from '@ui/atoms/typography/caption/caption';
import { LargeTitle } from '@ui/atoms/typography/largeTitle/large-title';

import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import models from '../../../../public/images/models.webp';

import classNames from 'classnames';

import css from './home.module.scss';
import { ROUTES } from '@api/routes';
import { isTelegram } from '@platform/platform-check';

interface Props {}

export const HomePage = ({}: Props) => {
	const pathname = usePathname();
	const { push } = useRouter();
	const isTMA = isTelegram();

	const handleClick = () => push(ROUTES.brands.all);

	useMainButtonTelegram(handleClick, 'Shop');

	return (
		<div className={classNames('container', css.home)}>
			<Image
				src={models}
				alt={'Models'}
				quality={100}
				fill
				sizes={'100vw'}
				style={{
					objectFit: 'cover',
					overflowX: 'hidden',
				}}
			/>
			<div className={css.home__overlay}>
				<div className={css.home__info}>
					<LargeTitle>KRUL</LargeTitle>
					<Caption>Discover the latest trends in fashion and accessories</Caption>
				</div>
			</div>
			{!isTMA && pathname === '/' && <MainButton onClick={handleClick}>Shop</MainButton>}
		</div>
	);
};
