'use client';

import { useMainButton } from '@tma.js/sdk-react';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { Title } from '@ui/atoms/text/text';

import { handleMainButton } from '@telegram/tma-actions';

const Home = () => {
	const mainButton = useMainButton();
	const router = useRouter();

	useEffect(() => {
		mainButton.show();

		mainButton.setParams({
			text: 'Shops',
			isVisible: true,
		});

		handleMainButton(() => router.push('/shops'));

		return () => {
			mainButton.hide();
		};
	}, [mainButton, router]);

	return (
		<>
			<Title level={'1'} style={{ textAlign: 'center' }}>
				Welcome
			</Title>
		</>
	);
};

export default Home;
