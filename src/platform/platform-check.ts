'use client';

import WebApp from '@twa-dev/sdk';

export const isTelegram = () => {
	return typeof window !== 'undefined' ? WebApp.platform !== 'unknown' : false;
};
//
// import { useEffect, useState } from 'react';
//
// import { isTMA } from '@tma.js/sdk';
//
// export const useTMACheck = () => {
// 	const [isTelegram, setIsTelegram] = useState(false);
//
// 	useEffect(() => {
// 		isTMA().then(res => setIsTelegram(res));
//
// 		return () => {
// 			setIsTelegram(false);
// 		};
// 	}, []);
//
// 	return isTelegram;
// };
