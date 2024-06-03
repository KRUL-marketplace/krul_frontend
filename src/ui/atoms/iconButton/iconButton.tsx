'use client';

import {
	IconButtonProps,
	IconButton as TelegramIconButton,
} from '@telegram-apps/telegram-ui/dist/components/Blocks/IconButton/IconButton';

import classnames from 'classnames';

import css from './iconButton.module.scss';

const smallIcon = css.iconButton__icon_small;
const mediumIcon = css.iconButton__icon_medium;
const largeIcon = css.iconButton__icon_large;

const svgStyle = {
	s: smallIcon,
	m: mediumIcon,
	l: largeIcon,
};

export const IconButton = (props: IconButtonProps) => {
	const classNames = classnames(css.iconButton, props.className, svgStyle[props.size || 'm']);

	return (
		<TelegramIconButton size={'m'} mode={'outline'} {...props} className={classNames}>
			{props.children}
		</TelegramIconButton>
	);
};
