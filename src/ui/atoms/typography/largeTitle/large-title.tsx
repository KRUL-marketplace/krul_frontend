import React from 'react';

import { LargeTitleProps } from '@telegram-apps/telegram-ui';
import { LargeTitle as TelegramLargeTitle } from '@telegram-apps/telegram-ui/dist/components/Typography/LargeTitle/LargeTitle';

import cn from 'classnames';

import css from './large-title.module.scss';

export const LargeTitle = (props: LargeTitleProps) => {
	const classNames = cn(props.className, css.largeTitle, 'typography');

	return (
		<TelegramLargeTitle {...props} className={classNames}>
			{props.children}
		</TelegramLargeTitle>
	);
};
