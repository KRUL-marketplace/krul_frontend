import React from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { MainButton } from '@ui/atoms/button/mainButton/mainButton';
import { Text } from '@ui/atoms/typography/text/text';

import duckGif from '../../../../public/gif/duck.gif';

import css from './cart.module.scss';
import { ROUTES } from '@api/routes';
import { isTelegram } from '@platform/platform-check';

export const CartEmptyPage = () => {
	const { push } = useRouter();

	const handleClick = () => push(ROUTES.brands.all);

	return (
		<>
			<div className={css.emptyCart}>
				<Image src={duckGif.src} alt="Empty cart" width={126} height={126} />
				<Text style={{ marginTop: '1rem' }}>
					Your cart is empty <br />
					Let&apos;s go shopping!
				</Text>
			</div>
			{!isTelegram() && <MainButton onClick={handleClick}>Let&apos;s go</MainButton>}
		</>
	);
};
