'use client';

import { initMainButton } from '@tma.js/sdk-react';
import { useEffect } from 'react';

import { isTelegram } from '@platform/platform-check';

type UseMainButtonType = (onClick: () => void, text?: string) => void;

export const useMainButton: UseMainButtonType = (onClick, text = 'Continue') => {
	const [mainButton] = initMainButton();

	useEffect(() => {
		mainButton.on('click', onClick);
		mainButton.enable();

		return () => {
			mainButton.off('click', onClick);
		};
	}, [mainButton, onClick]);

	useEffect(() => {
		mainButton.setParams({
			isVisible: true,
			text,
		});

		return () => {
			mainButton.hideLoader();
			mainButton.setParams({ isVisible: false });
		};
	}, [text, mainButton]);
};

export const useMainButtonTelegram = isTelegram() ? useMainButton : () => {};
