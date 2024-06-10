'use client';

import { SDKProvider } from '@tma.js/sdk-react';
import { ReactNode, useCallback } from 'react';

import { AppRoot } from '@telegram-apps/telegram-ui';

import { platform } from '@platform/platform';
import { isTelegram } from '@platform/platform-check';

export function Providers({ children }: { children: ReactNode }) {
	const theme = platform.getTheme();

	const appearance = theme.isDark ? 'dark' : 'light';

	const getAppearance = useCallback(() => {
		return !isTelegram() ? 'dark' : appearance;
	}, [appearance]);

	return (
		<AppRoot appearance={getAppearance()}>
			<style jsx global>{`
				body {
					background: ${theme.bgColor};
				}
			`}</style>
			<SDKProvider acceptCustomStyles debug>
				{children}
			</SDKProvider>
		</AppRoot>
	);
}
