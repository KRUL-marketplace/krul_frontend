'use client';

import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';

import { useBackButtonTelegram } from '@platform/telegram/use-back-button';

import css from './main.module.scss';
import { platform } from '@platform/platform';

export const Main = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
	useEffect(() => {
		platform.init();
	}, []);

	useBackButtonTelegram();

	return (
		<>
			<main {...props} className={css.main}>
				<div className={css.main__wrapper}>{props.children}</div>
			</main>
		</>
	);
};
