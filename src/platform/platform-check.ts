'use client';

import WebApp from '@twa-dev/sdk';

export const isTelegram = () => {
	return typeof window !== 'undefined' ? WebApp.platform !== 'unknown' : false;
};

// const isTG = async () => {
// 	if (typeof process === 'undefined') {
// 		throw new Error('[Server method] you are importing a server-only module outside of server');
// 	}
//
// 	const { get } = headers();
// 	const ua = get('user-agent');
//
// 	const device = new UAParser(ua || '');
// 	return device.getBrowser().name;
// };
//
// isTG().then(res => console.log(res));
