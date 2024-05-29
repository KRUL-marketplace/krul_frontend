import { Viewport, initMiniApp, initViewport } from '@tma.js/sdk-react';

import { cssVarToValue } from '@platform/telegram/css-var-to-value';
import { expandWebApp, openExternalLink, openTelegramLink } from '@platform/telegram/tma-actions';

import { Platform, PlatformTheme } from '@platform/platform';
import { InitDataParsed, initClosingBehavior, retrieveLaunchParams } from '@tma.js/sdk';

export interface TelegramPlatform extends Platform {
	getInitData(): InitDataParsed | undefined;
	getDataRaw(): string | undefined;
	getStartParam(): string | undefined;
	getViewport(): Promise<Viewport>;
}

export const colorScheme: PlatformTheme = {
	buttonColor: 'var(--tg-theme-button-color)',

	linkColor: 'var(--tg-theme-link-color)',
	hintColor: 'var(--tg-theme-hint-color)',

	backgroundColor: 'var(--tg-theme-bg-color)',
	secondaryBackgroundColor: 'var(--tg-theme-secondary-bg-color)',
	headerBackgroundColor: 'var(--tg-theme-header-bg-color)',
	sectionBackgroundColor: 'var(--tg-theme-section-bg-color)',

	textColor: 'var(--tg-theme-text-color)',
	accentTextColor: 'var(--tg-theme-accent-text-color)',
	buttonTextColor: 'var(--tg-theme-button-text-color)',
	subtitleTextColor: 'var(--tg-theme-subtitle-text-color)',
	destructiveTextColor: 'var(--tg-theme-destructive-text-color)',
	sectionHeaderTextColor: 'var(--tg-theme-section-header-text-color)',
};

const createTelegramPlatform = (): TelegramPlatform => {
	const {
		buttonColor,
		hintColor,
		buttonTextColor,
		accentTextColor,
		backgroundColor,
		destructiveTextColor,
		headerBackgroundColor,
		linkColor,
		secondaryBackgroundColor,
		sectionBackgroundColor,
		sectionHeaderTextColor,
		subtitleTextColor,
		textColor,
	} = colorScheme;

	const { initDataRaw, initData, startParam } = retrieveLaunchParams();
	const miniApp = initMiniApp();

	const closingBehavior = initClosingBehavior();

	return {
		init: () => {
			miniApp.ready();
			expandWebApp();
			closingBehavior.enableConfirmation();

			miniApp.setBgColor('#212121');
			miniApp.setHeaderColor('#212121');
		},
		getPlatform: () => (navigator.userAgent.includes('AppleWebKit') ? 'ios' : 'material'),
		getInitData: () => initData,
		getTheme: () => {
			return {
				buttonColor: cssVarToValue(buttonColor),
				hintColor: cssVarToValue(hintColor),
				buttonTextColor: cssVarToValue(buttonTextColor),
				accentTextColor: cssVarToValue(accentTextColor),
				backgroundColor: miniApp.bgColor || cssVarToValue(backgroundColor),
				destructiveTextColor: cssVarToValue(destructiveTextColor),
				headerBackgroundColor: miniApp.headerColor || cssVarToValue(headerBackgroundColor),
				linkColor: cssVarToValue(linkColor),
				secondaryBackgroundColor: cssVarToValue(secondaryBackgroundColor),
				sectionBackgroundColor: cssVarToValue(sectionBackgroundColor),
				sectionHeaderTextColor: cssVarToValue(sectionHeaderTextColor),
				subtitleTextColor: cssVarToValue(subtitleTextColor),
				textColor: cssVarToValue(textColor),
			};
		},
		getDataRaw: () => initDataRaw,
		getStartParam: () => startParam,
		getViewport: async () => await initViewport(),
		openInternalLink: (link: string) => openTelegramLink(link),

		getLanguage: () => {
			const languageCode = initData?.user?.languageCode;
			switch (languageCode) {
				case 'ru':
				case 'en':
					return languageCode;
				default:
					return 'en';
			}
		},
		openExternalLink: (link: string, instantView?: boolean) => openExternalLink(link, instantView),
	};
};

export default createTelegramPlatform;
