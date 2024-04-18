'use client';

import { IconButton as Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';

// @ts-ignore
import { IconButtonProps } from '@chakra-ui/button/dist/icon-button';

import { useScreenSize } from '@/utils/hooks/hooks';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	const { isMobile, isMobileLandscape, screenSize } = useScreenSize();
	const disableStyles = isMobile || isMobileLandscape;
	console.log(disableStyles);
	return (
		<Icon
			sx={{
				background: 'transparent',
				// $icon-button-hover-bg-color
				_active: { background: disableStyles ? 'transparent' : '#d6d6d6' },
				_hover: { background: disableStyles ? 'transparent' : '#d6d6d6' },
				borderRadius: 0,
			}}
			ref={ref}
			{...props}
		/>
	);
});
