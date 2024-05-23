import { Platform } from '@platform/platform';

export interface BrowserPlatform extends Platform {
	getInitData(): string | undefined;
}

export const colorScheme: Record<string, string> = {
	'--tg-theme-hint-color': '#999999',
	'--tg-theme-secondary-bg-color': '#efeff3',
	'--tg-theme-text-color': '#000000',
	'--tg-theme-section-bg-color': '#ffffff',
	'--tg-theme-header-bg-color': '#efeff3',
	'--tg-theme-accent-text-color': '#2481cc',
	'--tg-color-scheme': 'light',
	'--tg-viewport-height': '100vh',
	'--tg-theme-destructive-text-color': '#ff3b30',
	'--tg-theme-button-color': '#2481cc',
	'--tg-theme-bg-color': '#ffffff',
	'--tg-theme-subtitle-text-color': '#999999',
	'--tg-theme-button-text-color': '#ffffff',
	'--tg-theme-section-header-text-color': '#6d6d71',
	'--tg-theme-link-color': '#2481cc',
	'--tg-viewport-stable-height': '100vh',
};

const createBrowserPlatform = (): BrowserPlatform => {
	return {
		init: () => {
			for (const variable in colorScheme) {
				document.documentElement.style.setProperty(variable, colorScheme[variable]);
			}
		},
		getInitData: () => undefined,
		getTheme: () => ({
			buttonColor: colorScheme['--tg-theme-button-color'],
			hintColor: colorScheme['--tg-theme-hint-color'],
			buttonTextColor: colorScheme['--tg-theme-button-text-color'],
			accentTextColor: colorScheme['--tg-theme-accent-text-color'],
			backgroundColor: colorScheme['--tg-theme-bg-color'],
			destructiveTextColor: colorScheme['--tg-theme-destructive-text-color'],
			headerBackgroundColor: colorScheme['--tg-theme-header-bg-color'],
			linkColor: colorScheme['--tg-theme-link-color'],
			secondaryBackgroundColor: colorScheme['--tg-theme-secondary-bg-color'],
			sectionBackgroundColor: colorScheme['--tg-theme-section-bg-color'],
			sectionHeaderTextColor: colorScheme['--tg-theme-section-header-text-color'],
			subtitleTextColor: colorScheme['--tg-theme-subtitle-text-color'],
			textColor: colorScheme['--tg-theme-text-color'],
		}),

		openInternalLink: (link: string) => (window.location.href = link),

		openExternalLink: (link: string) => window.open(link, '_blank'),

		getLanguage: () => 'en',
	};
};

export default createBrowserPlatform;
