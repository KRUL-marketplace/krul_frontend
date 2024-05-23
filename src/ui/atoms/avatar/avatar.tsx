import React from 'react';

import { AvatarProps, Avatar as TelegramAvatar } from '@telegram-apps/telegram-ui';

interface Props extends AvatarProps {}

export const Avatar = ({ src = 'https://avatars.githubusercontent.com/u/84640980?v=4', size = 40, acronym }: Props) => {
	return <TelegramAvatar src={src} acronym={acronym} size={size} />;
};
