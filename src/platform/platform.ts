import { Invoice } from '@tma.js/sdk-react';

import createTelegramPlatform from '@platform/telegram/init';
import { Language } from '@platform/telegram/models';

import createBrowserPlatform from '@platform/browser/init';
import { isTelegram } from '@platform/platform-check';

export type PlatformTheme = {
	buttonColor: string;
	hintColor: string;
	buttonTextColor: string;
	accentTextColor: string;
	backgroundColor: string;
	destructiveTextColor: string;
	headerBackgroundColor: string;
	linkColor: string;
	secondaryBackgroundColor: string;
	sectionBackgroundColor: string;
	sectionHeaderTextColor: string;
	subtitleTextColor: string;
	textColor: string;
};

export interface Platform {
	init(): void;
	openExternalLink(link: string): void;
	openInternalLink(link: string): void;
	getTheme(): PlatformTheme;
	getLanguage(): Language;
	getPlatform(): 'ios' | 'material' | 'parent' | undefined;
	getInvoice?: () => Invoice;
}

export const createPlatform = () => {
	const res = isTelegram();

	return res ? createTelegramPlatform() : createBrowserPlatform();
};

export const platform = createPlatform();
