'use client';

import React from 'react';

import { GridProps } from '@mui/material';
import MuiGrid from '@mui/material/Grid';

export const Grid = (props: GridProps) => (
	<MuiGrid container justifyContent={'center'} alignItems={'center'} {...props}>
		{props.children}
	</MuiGrid>
);

export const GridItem = (props: GridProps) => <MuiGrid {...props}>{props.children}</MuiGrid>;
