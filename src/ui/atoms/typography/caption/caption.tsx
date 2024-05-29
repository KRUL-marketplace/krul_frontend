import React from 'react';

import { CaptionProps } from '@telegram-apps/telegram-ui';
import { Caption as TelegramCaption } from '@telegram-apps/telegram-ui/dist/components/Typography/Caption/Caption';

import cn from 'classnames';

import css from './caption.module.scss';

export const Caption = (props: CaptionProps) => {
	const classNames = cn(props.className, css.caption, 'typography');

	return (
		<TelegramCaption {...props} className={classNames}>
			{props.children}
		</TelegramCaption>
	);
};
