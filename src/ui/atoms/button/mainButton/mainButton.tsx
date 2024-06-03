import React from 'react';

import { Button, ButtonProps } from '@telegram-apps/telegram-ui/dist/components/Blocks/Button/Button';

import css from './mainButton.module.scss';

interface Props extends ButtonProps {}

export const MainButton = (props: Props) => {
	return (
		<Button className={css.mainButton} {...props}>
			{props.children}
		</Button>
	);
};
