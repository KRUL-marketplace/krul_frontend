'use client';

import { useEffect, useState } from 'react';

import { isTMA } from '@tma.js/sdk';

export const useTMACheck = () => {
	const [isTelegram1, setIsTelegram] = useState(true);

	useEffect(() => {
		isTMA().then(res => setIsTelegram(res));

		return () => {
			setIsTelegram(false);
		};
	}, []);

	return isTelegram1;
};
