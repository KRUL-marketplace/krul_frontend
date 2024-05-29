'use client';

import { initMainButton } from '@tma.js/sdk-react';
import { useEffect } from 'react';

import { isTelegram } from '@platform/platform-check';

type UseMainButtonType = (onClick: () => void, text?: string) => void;

export const useMainButton: UseMainButtonType = (onClick, text) => {
	const mainButton = initMainButton();

	useEffect(() => {
		mainButton.setParams({
			backgroundColor: '#000',
			textColor: '#fff',
			isVisible: true,
			text,
		});

		mainButton.on('click', onClick);

		return () => {
			mainButton.off('click', onClick);
			mainButton.hideLoader();
			mainButton.setParams({ isVisible: false });
		};
	}, [onClick, text, mainButton]);
};

export const useMainButtonTelegram = isTelegram() ? useMainButton : () => {};
