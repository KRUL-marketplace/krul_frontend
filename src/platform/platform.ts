import { Invoice, ThemeParams, ThemeParamsParsed } from '@tma.js/sdk-react';

import createTelegramPlatform from '@platform/telegram/init';
import { Language } from '@platform/telegram/models';

import createBrowserPlatform from '@platform/browser/init';
import { isTelegram } from '@platform/platform-check';
import { InitDataParsed } from '@tma.js/sdk';

export interface Platform {
	init(): void;
	getInitData(): InitDataParsed | undefined;
	getPlatform(): 'ios' | 'material' | 'parent' | undefined;
	getTheme(): ThemeParams | ThemeParamsParsed;
	getDataRaw(): string | undefined;
	getStartParam(): string | undefined;
	getInvoice?: () => Invoice;
	getLanguage(): Language;

	openExternalLink(link: string): void;
	openInternalLink(link: string): void;
}

export const createPlatform = () => {
	const res = isTelegram();

	return res ? createTelegramPlatform() : createBrowserPlatform();
};

export const platform = createPlatform();
