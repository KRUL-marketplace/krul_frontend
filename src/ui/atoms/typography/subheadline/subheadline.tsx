import React from 'react';

import { SubheadlineProps } from '@telegram-apps/telegram-ui';
import { Subheadline as TelegramSubheadline } from '@telegram-apps/telegram-ui/dist/components/Typography/Subheadline/Subheadline';

import cn from 'classnames';

import css from './subheadline.module.scss';

export const Subheadline = (props: SubheadlineProps) => {
	const classNames = cn(props.className, css.subheadline, 'typography');

	return (
		<TelegramSubheadline {...props} className={classNames}>
			{props.children}
		</TelegramSubheadline>
	);
};
