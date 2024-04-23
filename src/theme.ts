'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	breakpoints: {
		values: {
			xs: 0,
			sm: 575.98,
			md: 767.99,
			lg: 1199.97,
			xl: 1399.98,
		},
	},
});

export default theme;
