import { ThemeParamsParsed } from '@tma.js/sdk-react';

import { Platform } from '@platform/platform';
import { mockTelegramEnv, parseInitData } from '@tma.js/sdk';

const initDataRaw = new URLSearchParams([
	[
		'user',
		JSON.stringify({
			id: 99281932,
			first_name: 'Ramazan',
			last_name: 'Ittiev',
			username: 'Ramazzaniii',
			language_code: 'ru',
			is_premium: false,
			allows_write_to_pm: true,
		}),
	],
	['hash', '89d6079ad6762351f38c6dbbc41bb53048019256a9443988af7a48bcad16ba31'],
	['auth_date', '1716922846'],
	['start_param', 'debug'],
	['chat_type', 'sender'],
	['chat_instance', '8428209589180549439'],
]).toString();

const themeParams: ThemeParamsParsed = {
	accentTextColor: '#8774e1',
	bgColor: '#212121',
	buttonColor: '#8774e1',
	buttonTextColor: '#ffffff',
	destructiveTextColor: '#ff595a',
	headerBgColor: '#212121',
	hintColor: '#aaaaaa',
	linkColor: '#8774e1',
	secondaryBgColor: '#181818',
	sectionBgColor: '#212121',
	sectionHeaderTextColor: '#8774e1',
	subtitleTextColor: '#aaaaaa',
	textColor: '#ffffff',
};

const createBrowserPlatform = (): Platform => {
	return {
		init: () => {
			return mockTelegramEnv({
				themeParams,
				initData: parseInitData(initDataRaw),
				initDataRaw,
				version: '7.2',
				platform: 'tdesktop',
				startParam: 'startParam',
			});
		},

		getInitData: () => parseInitData(initDataRaw),
		getDataRaw: () => initDataRaw,
		getStartParam: () => 'startParam',

		getPlatform: () => (navigator.userAgent.includes('AppleWebKit') ? 'ios' : 'material'),
		getTheme: () => themeParams,
		getLanguage: () => 'en',

		openInternalLink: (link: string) => (window.location.href = link),

		openExternalLink: (link: string) => window.open(link, '_blank'),
	};
};

export default createBrowserPlatform;
