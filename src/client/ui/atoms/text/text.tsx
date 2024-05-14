import React, { HTMLProps } from 'react';

interface TextProps extends HTMLProps<HTMLDivElement> {
	component?: string;
}

export const Text = (props: TextProps) => {
	return (
		<div is={props.component} {...props}>
			{props.children}
		</div>
	);
};
