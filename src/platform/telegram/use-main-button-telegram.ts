'use client';

import { MainButton as TMAMainButton, useThemeParams } from '@tma.js/sdk-react';
import { useEffect } from 'react';

import { isTelegram } from '@platform/platform-check';
import { postEvent } from '@tma.js/sdk';

type UseMainButtonType = (onClick: () => void, text?: string) => void;

const mainButton = new TMAMainButton({
	backgroundColor: '#000000',
	isEnabled: true,
	isVisible: false,
	isLoaderVisible: false,
	text: 'Continue',
	textColor: '#ffffff',
	postEvent,
});

export const useMainButton: UseMainButtonType = (onClick, text) => {
	const theme = useThemeParams();

	useEffect(() => {
		mainButton.setParams({
			backgroundColor: theme.buttonColor,
			textColor: theme.buttonTextColor,
			isVisible: true,
			text,
		});

		mainButton.on('click', onClick);

		return () => {
			mainButton.off('click', onClick);
			mainButton.hideLoader();
			mainButton.setParams({ isVisible: false });
		};
	}, [onClick, text, theme.buttonColor, theme.buttonTextColor]);
};

export const useMainButtonTelegram = isTelegram() ? useMainButton : () => {};
