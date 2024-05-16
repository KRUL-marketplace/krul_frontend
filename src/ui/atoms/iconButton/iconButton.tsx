'use client';

import { forwardRef } from 'react';

import Icon from '@mui/material/IconButton';
import { IconButtonProps } from '@mui/material/IconButton';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	return (
		<Icon ref={ref} sx={{ color: '#000' }} {...props}>
			{props.children}
		</Icon>
	);
});

IconButton.displayName = 'IconButton';
