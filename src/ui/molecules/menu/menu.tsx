'use client';

import React from 'react';

import { Drawer } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/system/Box';

import { IconButton } from '@/ui/atoms/iconButton/iconButton';
import { IconHamburger } from '@/ui/atoms/icons/icon-humburger/icon-hamburger';

import '../../atoms/icons/icon-humburger/icon-humburger.scss';

interface Props {
	placement?: 'right' | 'left' | 'top' | 'bottom';
}

const DrawerList = (
	<Box sx={{ width: 250 }} role="presentation">
		<List>
			<ListItem disablePadding>Text</ListItem>
			<ListItem disablePadding>Text</ListItem>
			<ListItem disablePadding>Text</ListItem>
		</List>
	</Box>
);

export const Menu = ({ placement = 'right' }: Props) => {
	const [open, setOpen] = React.useState(false);

	const toggleDrawer = (newOpen: boolean) => () => {
		setOpen(newOpen);
	};

	return (
		<>
			<IconButton aria-label={'menu'} onClick={toggleDrawer(!open)}>
				<IconHamburger isOpen={open} />
			</IconButton>
			<Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
				{DrawerList}
			</Drawer>
		</>
	);
};
