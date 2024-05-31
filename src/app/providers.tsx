'use client';

import { SDKProvider } from '@tma.js/sdk-react';
import { ReactNode } from 'react';

import { AppRoot } from '@telegram-apps/telegram-ui';

import { platform } from '@platform/platform';

export function Providers({ children }: { children: ReactNode }) {
	const theme = platform.getTheme();

	return (
		<AppRoot>
			<style jsx global>{`
				body {
					background: ${theme.backgroundColor};
				}
			`}</style>
			<SDKProvider acceptCustomStyles debug>
				{children}
			</SDKProvider>
		</AppRoot>
	);
}
