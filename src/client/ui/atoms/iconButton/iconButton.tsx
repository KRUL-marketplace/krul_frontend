'use client';

import { forwardRef } from 'react';

import Icon from '@mui/material/IconButton';
import { IconButtonProps } from '@mui/material/IconButton';

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
	return (
		<Icon ref={ref} {...props}>
			{props.children}
		</Icon>
	);
});
