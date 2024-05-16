'use client';

import { MainButton, useThemeParams } from '@tma.js/sdk-react';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Title } from '@ui/atoms/text/text';

import { postEvent } from '@tma.js/sdk';

const mainButton = new MainButton({
	backgroundColor: '#000000',
	isEnabled: true,
	isVisible: true,
	isLoaderVisible: false,
	text: 'Shops',
	textColor: '#ffffff',
	postEvent,
});

const Home = () => {
	const theme = useThemeParams();
	const router = useRouter();

	useEffect(() => {
		mainButton.setParams({
			backgroundColor: theme.buttonColor,
			textColor: theme.buttonTextColor,
			isVisible: true,
		});

		mainButton.on('click', () => router.push('/shops'));

		return () => {
			mainButton.isVisible ? mainButton.hide() : mainButton.show();
		};
	}, [router, theme]);

	return (
		<>
			<Title level={'1'} style={{ textAlign: 'center' }}>
				Welcome
			</Title>
		</>
	);
};

export default Home;
