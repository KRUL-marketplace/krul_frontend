import React from 'react';

import {
	CaptionProps,
	Subheadline,
	SubheadlineProps,
	Caption as TelegramCaption,
	Text as TelegramText,
	Title as TelegramTitle,
	TextProps,
	TitleProps,
} from '@telegram-apps/telegram-ui';

import cn from 'classnames';

import css from './text.module.scss';

export const Text = (props: TextProps) => {
	const classNames = cn(props.className, css.text);

	return (
		<TelegramText {...props} className={classNames}>
			{props.children}
		</TelegramText>
	);
};

export const Title = (props: TitleProps) => {
	const classNames = cn(props.className, css.text);

	return (
		<TelegramTitle {...props} className={classNames}>
			{props.children}
		</TelegramTitle>
	);
};

export const Caption = (props: CaptionProps) => {
	const classNames = cn(props.className, css.text);

	return (
		<TelegramCaption {...props} className={classNames}>
			{props.children}
		</TelegramCaption>
	);
};

export const Subheading = (props: SubheadlineProps) => {
	const classNames = cn(props.className, css.text);

	return (
		<Subheadline {...props} className={classNames}>
			{props.children}
		</Subheadline>
	);
};
