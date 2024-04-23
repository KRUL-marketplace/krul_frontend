'use client';

import React from 'react';

import { GridProps } from '@mui/material';
import MuiGrid from '@mui/material/Grid';

export const Grid = (props: GridProps) => (
	<MuiGrid {...props} container justifyContent={'center'} alignItems={'center'} padding={'0 1rem'}>
		{props.children}
	</MuiGrid>
);

export const GridItem = (props: GridProps) => <MuiGrid {...props}>{props.children}</MuiGrid>;
