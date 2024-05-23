'use client';

import { useCallback, useEffect } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { isTelegram } from '@platform/platform-check';
import { BackButton, postEvent } from '@tma.js/sdk';

const backButton = new BackButton(false, '6.0', postEvent);

const useBackButton = () => {
	const pathname = usePathname();
	const { back } = useRouter();

	const onClick = useCallback(() => {
		back();
	}, [back]);

	useEffect(() => {
		pathname === '/' ? backButton.hide() : backButton.show();
	}, [pathname]);

	useEffect(() => {
		backButton.on('click', onClick);

		return () => {
			backButton.off('click', onClick);
		};
	}, [onClick]);
};

export const useBackButtonTelegram = isTelegram() ? useBackButton : () => {};
