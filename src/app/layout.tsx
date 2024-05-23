import { ReactNode } from 'react';

import type { Metadata } from 'next';

import { Main } from '@app/main/main';
import '@telegram-apps/telegram-ui/dist/styles.css';

import { Header } from '@ui/molecules/header/header';

import '@/utils/styles/global.scss';
import '@/utils/styles/normalize.css';
import '@/utils/styles/tokens/light/lightTheme.scss';
import { Providers } from '@utils/providers';
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
		<html lang="ru" className={fonts.rubik.variable}>
			{/*<RootHead />*/}
			<body>
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
