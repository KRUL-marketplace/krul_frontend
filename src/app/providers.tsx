'use client';

import { ReactNode } from 'react';

import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';

import { MediaContextProvider } from '@/client/ui/helpers/media';

import theme from '@theme';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

export function Providers({ children }: { children: ReactNode }) {
	return (
		<AppRouterCacheProvider options={{ enableCssLayer: true }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MediaContextProvider>{children}</MediaContextProvider>
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
