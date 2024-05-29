'use client';

import { useCallback, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { isTelegram } from '@platform/platform-check';
import { initBackButton } from '@tma.js/sdk';

const useBackButton = () => {
	const backButton = initBackButton();

	const pathname = usePathname();
	const { back } = useRouter();

	const onClick = useCallback(() => {
		back();
	}, [back]);

	useEffect(() => {
		pathname === '/' ? backButton.hide() : backButton.show();
	}, [pathname, backButton]);

	useEffect(() => {
		backButton.on('click', onClick);

		return () => {
			backButton.off('click', onClick);
		};
	}, [onClick, backButton]);
};

export const useBackButtonTelegram = isTelegram() ? useBackButton : () => {};
