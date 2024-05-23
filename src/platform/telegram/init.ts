import { initMiniApp } from '@tma.js/sdk-react';

import { cssVarToValue } from '@platform/telegram/css-var-to-value';
import {
	enableWebAppClosingConfirmation,
	expandWebApp,
	openExternalLink,
	openTelegramLink,
	setBackground,
	setHeaderBackground,
} from '@platform/telegram/tma-actions';

import { Platform, PlatformTheme } from '@platform/platform';
import { InitDataParsed, retrieveLaunchParams } from '@tma.js/sdk';

export interface TelegramPlatform extends Platform {
	getInitData(): InitDataParsed | undefined;
	getDataRaw(): string | undefined;
	getStartParam(): string | undefined;
}

export const colorScheme: PlatformTheme = {
	buttonColor: 'var(--tg-theme-button-color)',
	buttonTextColor: 'var(--tg-theme-button-text-color)',
	hintColor: 'var(--tg-theme-hint-color)',
	accentTextColor: 'var(--tg-theme-accent-text-color)',
	backgroundColor: 'var(--tg-theme-background-color)',
	destructiveTextColor: 'var(--tg-theme-destructive-text-color)',
	headerBackgroundColor: 'var(--tg-theme-header-background-color)',
	linkColor: 'var(--tg-theme-link-color)',
	secondaryBackgroundColor: 'var(--tg-theme-secondary-background-color)',
	sectionBackgroundColor: 'var(--tg-theme-section-background-color)',
	sectionHeaderTextColor: 'var(--tg-theme-section-header-text-color)',
	subtitleTextColor: 'var(--tg-theme-subtitle-text-color)',
	textColor: 'var(--tg-theme-text-color)',
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

	return {
		init: () => {
			miniApp.ready();
			setHeaderBackground('#ffffff');
			setBackground('#ffffff');
			expandWebApp();
			enableWebAppClosingConfirmation();
		},
		getInitData: () => initData,
		getTheme: () => ({
			buttonColor: cssVarToValue(buttonColor),
			hintColor: cssVarToValue(hintColor),
			buttonTextColor: cssVarToValue(buttonTextColor),
			accentTextColor: cssVarToValue(accentTextColor),
			backgroundColor: cssVarToValue(backgroundColor),
			destructiveTextColor: cssVarToValue(destructiveTextColor),
			headerBackgroundColor: cssVarToValue(headerBackgroundColor),
			linkColor: cssVarToValue(linkColor),
			secondaryBackgroundColor: cssVarToValue(secondaryBackgroundColor),
			sectionBackgroundColor: cssVarToValue(sectionBackgroundColor),
			sectionHeaderTextColor: cssVarToValue(sectionHeaderTextColor),
			subtitleTextColor: cssVarToValue(subtitleTextColor),
			textColor: cssVarToValue(textColor),
		}),
		getDataRaw: () => initDataRaw,
		getStartParam: () => startParam,

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
