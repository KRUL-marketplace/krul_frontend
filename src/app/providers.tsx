'use client';

import { SDKProvider } from '@tma.js/sdk-react';
import { ReactNode } from 'react';

import { AppRoot } from '@telegram-apps/telegram-ui';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<AppRoot>
			<SDKProvider acceptCustomStyles debug>
				{children}
			</SDKProvider>
		</AppRoot>
	);
}
