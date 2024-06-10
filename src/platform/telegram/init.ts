import { Viewport, initMiniApp, initThemeParams, initViewport } from '@tma.js/sdk-react';

import { expandWebApp, openExternalLink, openTelegramLink } from '@platform/telegram/tma-actions';

import { Platform } from '@platform/platform';
import { initClosingBehavior, initInvoice, retrieveLaunchParams } from '@tma.js/sdk';

export interface TelegramPlatform extends Platform {
	getViewport(): Promise<Viewport>;
}

const createTelegramPlatform = (): TelegramPlatform => {
	const { initDataRaw, initData, startParam } = retrieveLaunchParams();
	const [theme] = initThemeParams();

	const [miniApp] = initMiniApp();
	const [closingBehavior] = initClosingBehavior();
	const [viewport] = initViewport();
	return {
		init: () => {
			miniApp.ready();
			expandWebApp();
			closingBehavior.enableConfirmation();

			theme.bgColor && miniApp.setBgColor(theme.bgColor);
			theme.headerBgColor && miniApp.setHeaderColor(theme.headerBgColor);
		},
		getPlatform: () => (navigator.userAgent.includes('AppleWebKit') ? 'ios' : 'material'),
		getInitData: () => initData,
		getTheme: () => theme,
		getDataRaw: () => initDataRaw,
		getStartParam: () => startParam,
		getViewport: async () => await viewport,
		getInvoice: initInvoice,
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

		openInternalLink: (link: string) => openTelegramLink(link),
		openExternalLink: (link: string, instantView?: boolean) => openExternalLink(link, instantView),
	};
};

export default createTelegramPlatform;
