'use client';

import React from 'react';

import { TextProps } from '@telegram-apps/telegram-ui';
import { Text as TelegramText } from '@telegram-apps/telegram-ui/dist/components/Typography/Text/Text';

import cn from 'classnames';

import css from './text.module.scss';

export const Text = (props: TextProps) => {
	const classNames = cn(props.className, css.text, 'typography');

	return (
		<TelegramText {...props} className={classNames}>
			{props.children}
		</TelegramText>
	);
};
