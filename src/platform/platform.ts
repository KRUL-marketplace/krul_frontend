import createTelegramPlatform from '@platform/telegram/init';
import { Language } from '@platform/telegram/models';

import createBrowserPlatform from '@platform/browser/init';
import { isTMA } from '@tma.js/sdk';

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
}

export const createPlatform = async () => {
	const res = await isTMA();

	return res ? createTelegramPlatform() : createBrowserPlatform();
};
