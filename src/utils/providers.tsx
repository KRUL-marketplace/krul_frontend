'use client';

import { SDKProvider } from '@tma.js/sdk-react';
import { ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { AppRoot } from '@telegram-apps/telegram-ui';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@theme';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<AppRouterCacheProvider options={{ enableCssLayer: true }}>
			<ThemeProvider theme={theme}>
				<AppRoot>
					<CssBaseline />
					{/*<MediaContextProvider>*/}
					<SDKProvider acceptCustomStyles debug>
						{children}
					</SDKProvider>
					{/*</MediaContextProvider>*/}
				</AppRoot>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
