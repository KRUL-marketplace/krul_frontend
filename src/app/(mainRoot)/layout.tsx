import { ReactNode } from 'react';

import type { Metadata } from 'next';

import '@app/global.css';
import { Main } from '@app/main/main';
import { Providers } from '@app/providers';
import '@app/theme.scss';
import '@telegram-apps/telegram-ui/dist/styles.css';

import { Header } from '@ui/molecules/header/header';

import { fonts } from '@utils/styles/fonts';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="ru" className={fonts.roboto.className} style={{ overflow: 'hidden' }}>
			<body className={'body'} style={{ overflowY: 'scroll' }}>
				<Providers>
					<Main>
						<Header />
						{children}
					</Main>
				</Providers>
			</body>
		</html>
	);
}
