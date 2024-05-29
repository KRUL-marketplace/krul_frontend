'use client';

import {
	IconButtonProps,
	IconButton as TelegramIconButton,
} from '@telegram-apps/telegram-ui/dist/components/Blocks/IconButton/IconButton';

import classnames from 'classnames';

import css from './iconButton.module.scss';

export const IconButton = (props: IconButtonProps) => {
	const classNames = classnames(css.iconButton, props.className);

	return (
		<TelegramIconButton size={'l'} mode={'outline'} {...props} className={classNames}>
			{props.children}
		</TelegramIconButton>
	);
};
