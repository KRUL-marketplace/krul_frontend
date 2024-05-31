'use client';

import { initMainButton } from '@tma.js/sdk-react';
import { useEffect } from 'react';

import { isTelegram } from '@platform/platform-check';

type UseMainButtonType = (onClick: () => void, text?: string) => void;

export const useMainButton: UseMainButtonType = (onClick, text) => {
	const [mainButton, cleanMainButton] = initMainButton();

	useEffect(() => {
		mainButton.setParams({
			bgColor: '#000',
			textColor: '#fff',
			isVisible: true,
			text,
		});

		mainButton.on('click', onClick);

		return () => {
			mainButton.off('click', onClick);
			mainButton.hideLoader();
			mainButton.setParams({ isVisible: false });
			cleanMainButton();
		};
	}, [onClick, text, mainButton, cleanMainButton]);
};

export const useMainButtonTelegram = isTelegram() ? useMainButton : () => {};
