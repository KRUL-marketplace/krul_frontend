'use client';

import React from 'react';

import { useDisclosure } from '@chakra-ui/hooks';
import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/modal';

import { IconButton } from '@/client/ui/atoms/iconButton/iconButton';
import { IconHamburger } from '@/client/ui/atoms/icons/icon-humburger/icon-hamburger';

import '../../atoms/icons/icon-humburger/icon-humburger.scss';

interface Props {
	placement?: 'right' | 'left' | 'top' | 'bottom';
}

export const Menu = ({ placement = 'right' }: Props) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			<IconButton aria-label={'menu'} icon={<IconHamburger checked={isOpen} />} onClick={onOpen} />
			<Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
					<DrawerBody>
						<p>Some contents...</p>
						<p>Some contents...</p>
						<p>Some contents...</p>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
};
