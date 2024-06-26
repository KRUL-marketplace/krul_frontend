'use client';

import { useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { isTelegram } from '@platform/platform-check';
import { initBackButton } from '@tma.js/sdk';

const useBackButton = () => {
	const [backButton] = initBackButton();

	const pathname = usePathname();
	const { back } = useRouter();

	useEffect(() => {
		pathname === '/' ? backButton.hide() : backButton.show();
	}, [pathname, backButton]);

	useEffect(() => {
		backButton.on('click', back);

		return () => {
			backButton.off('click', back);
			backButton.hide();
		};
	}, [back, backButton]);
};

export const useBackButtonTelegram = isTelegram() ? useBackButton : () => {};
