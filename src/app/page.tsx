'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@telegram-apps/telegram-ui';

import { Title } from '@ui/atoms/text/text';

import { useMainButtonTelegram } from '@platform/telegram/use-main-button-telegram';

import { ROUTES } from '@api/routes';
import { useTMACheck } from '@platform/platform-check';

const Home = () => {
	const router = useRouter();
	const isTMA = useTMACheck();

	const handleClick = () => router.push(ROUTES.brands.all);

	useMainButtonTelegram()(handleClick, 'Shop');

	return (
		<>
			<Title level={'1'} style={{ textAlign: 'center' }}>
				Welcome
			</Title>
			{!isTMA && <Button onClick={handleClick}>Shop</Button>}
		</>
	);
};

export default Home;
