'use client';

import {
	bindMiniAppCSSVars,
	bindThemeParamsCSSVars,
	bindViewportCSSVars,
	useMiniApp,
	useThemeParams,
	useViewport,
} from '@tma.js/sdk-react';
import { DetailedHTMLProps, HTMLAttributes, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import {
	enableWebAppClosingConfirmation,
	expandWebApp,
	handleBackButton,
	hideBackButton,
	setBackground,
	setHeaderBackground,
	showBackButton,
} from '@telegram/tma-actions';

import css from './main.module.scss';

export const Main = (props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
	const pathname = usePathname();
	const router = useRouter();
	const miniApp = useMiniApp();

	const themeParams = useThemeParams();
	const viewport = useViewport();

	useEffect(() => {
		miniApp.ready();
	}, [miniApp]);

	useEffect(() => {
		setHeaderBackground('#ffffff');
	}, []);

	useEffect(() => {
		setBackground('#ffffff');
	}, []);

	useEffect(() => {
		return bindMiniAppCSSVars(miniApp, themeParams);
	}, [miniApp, themeParams]);

	useEffect(() => {
		return bindThemeParamsCSSVars(themeParams);
	}, [themeParams]);

	useEffect(() => {
		if (viewport) {
			return bindViewportCSSVars(viewport);
		}
	}, [viewport]);

	useEffect(() => {
		expandWebApp();
		enableWebAppClosingConfirmation();
		pathname === '/' ? hideBackButton() : showBackButton();
		handleBackButton(() => router.back());
	}, [pathname, router]);

	return (
		<main {...props} className={css.main}>
			<div className={css.main__wrapper}>{props.children}</div>
		</main>
	);
};
