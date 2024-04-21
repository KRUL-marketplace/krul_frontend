'use client';

import { IconButton as Icon } from '@chakra-ui/react';
import { forwardRef } from 'react';

// @ts-ignore
import { IconButtonProps } from '@chakra-ui/button/dist/icon-button';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	return (
		<Icon
			sx={{
				background: 'transparent',
				// $icon-button-hover-bg-color
				_active: { background: 'transparent' },
				_hover: { background: 'transparent' },
				borderRadius: 0,
			}}
			ref={ref}
			{...props}
		/>
	);
});
