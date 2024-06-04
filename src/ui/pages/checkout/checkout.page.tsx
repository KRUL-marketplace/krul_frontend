import React from 'react';

import { Badge } from '@telegram-apps/telegram-ui';

import { Title } from '@ui/atoms/typography/title/title';
import { Cell } from '@ui/molecules/cell/cell';

import example from '../../../../public/images/example 1.png';

import css from './checkout.module.scss';

interface Props {}

export const CheckoutPageUI = ({}: Props) => {
	return (
		<div className={css.checkout}>
			<Title level={'3'} className={css.checkout__title}>
				checkout
			</Title>
			<div className={css.checkout__wrapper}>
				<Cell
					title={'U.S. Polo'}
					image={example.src}
					caption={'70 $'}
					actionRight={
						<Badge mode="primary" type="number">
							5
						</Badge>
					}
				/>
			</div>
		</div>
	);
};
