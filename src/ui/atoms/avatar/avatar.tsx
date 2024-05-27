import React from 'react';

import { AvatarProps, Avatar as TelegramAvatar } from '@telegram-apps/telegram-ui';

import cx from 'classnames';

import css from './avatar.module.scss';

interface Props extends AvatarProps {}

export const Avatar = ({
	src = 'https://avatars.githubusercontent.com/u/84640980?v=4',
	size = 40,
	acronym,
	className,
}: Props) => {
	const classNames = cx(css.avatar, className);

	return <TelegramAvatar src={src} acronym={acronym} size={size} className={classNames} />;
};
