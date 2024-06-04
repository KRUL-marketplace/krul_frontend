import React from 'react';

import { IconButton } from '@ui/atoms/iconButton/iconButton';
import { iconAdd } from '@ui/atoms/icons/icon-add';
import { iconBin } from '@ui/atoms/icons/icon-bin';
import { iconRemove } from '@ui/atoms/icons/icon-remove';
import { Text } from '@ui/atoms/typography/text/text';
import { Title } from '@ui/atoms/typography/title/title';
import { Cell } from '@ui/molecules/cell/cell';

import example from '../../../../public/images/example 1.png';

import classNames from 'classnames';

import css from './cart.module.scss';

interface Props {}

const ActionBottom = () => (
	<div className={css.cart__cartItem__icons}>
		<IconButton>{iconRemove}</IconButton>
		<Text>1</Text>
		<IconButton>{iconAdd}</IconButton>
	</div>
);

const ActionRight = () => <IconButton>{iconBin}</IconButton>;

export const CartPageUI = ({}: Props) => {
	return (
		<div className={classNames(css.cart, 'container')}>
			<Title level={'3'} className={css.cart__title}>
				Cart
			</Title>
			<div className={css.cart__wrapper}>
				<Cell
					title={'U.S. Polo'}
					image={example.src}
					caption={'70 $'}
					actionBottom={<ActionBottom />}
					actionRight={<ActionRight />}
				/>
			</div>
		</div>
	);
};
