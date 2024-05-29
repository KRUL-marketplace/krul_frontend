import React from 'react';

import { TitleProps } from '@telegram-apps/telegram-ui';
import { Title as TelegramTitle } from '@telegram-apps/telegram-ui/dist/components/Typography/Title/Title';

import cn from 'classnames';

import css from './title.module.scss';

export const Title = (props: TitleProps) => {
	const classNames = cn(props.className, css.text, 'typography');

	return (
		<TelegramTitle {...props} className={classNames}>
			{props.children}
		</TelegramTitle>
	);
};
