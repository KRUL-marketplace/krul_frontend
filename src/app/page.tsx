'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@telegram-apps/telegram-ui';

import { Title } from '@ui/atoms/text/text';

import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import { isTelegram } from '@platform/platform-check';

const Home = () => {
	const router = useRouter();

	useMainButtonTelegram(() => router.push('/shops'), 'Shop');

	return (
		<>
			<Title level={'1'} style={{ textAlign: 'center' }}>
				Welcome
			</Title>
			{!isTelegram() && <Button onClick={() => router.push('/shops')}>Shop</Button>}
		</>
	);
};

export default Home;
