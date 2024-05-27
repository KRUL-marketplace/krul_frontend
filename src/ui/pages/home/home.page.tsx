'use client';

import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import css from '@app/page.module.scss';

import { Caption, Title } from '@ui/atoms/text/text';

import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import models from '../../../../public/images/models.webp';

import { ROUTES } from '@api/routes';

interface Props {}

export const HomePage = ({}: Props) => {
	const router = useRouter();

	const handleClick = () => router.push(ROUTES.brands.all);

	useMainButtonTelegram(handleClick, 'Shop');

	return (
		<div className={css.home}>
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
					<Title level={'1'} className={css.home__title}>
						KRUL
					</Title>
					<Caption className={css.home__caption}>Discover the latest trends in fashion and accessories</Caption>
				</div>
			</div>
			{/*{!isTG && <Button onClick={handleClick}>Shop</Button>}*/}
		</div>
	);
};
