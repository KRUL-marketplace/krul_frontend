'use client';

import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';

import { useBackButtonTelegram } from '@platform/telegram/use-back-button';

import classNames from 'classnames';

import css from './main.module.scss';
import { platform } from '@platform/platform';

export const Main = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
	useEffect(() => {
		platform.init();
	}, []);

	useBackButtonTelegram();

	const theme = platform.getTheme();

	return (
		<main {...props} className={classNames(css.main)} style={{ background: theme.bgColor }}>
			<div className={css.main__wrapper}>{props.children}</div>
		</main>
	);
};
