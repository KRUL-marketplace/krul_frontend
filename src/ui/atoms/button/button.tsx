import React, { ButtonHTMLAttributes, ReactElement } from 'react';

import { useAriaProperties } from '@/utils/hooks/hooks';

import cx from 'classnames';

import './button.css';

export type ButtonSize = 'large' | 'medium' | 'small';
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * @default large
	 */
	size?: ButtonSize;
	/**
	 * @default primary
	 */
	variant?: ButtonVariant;
	/**
	 * Makes the Button component occupy its parent's full width.
	 * @default false
	 */
	fullWidth?: boolean;
	/**
	 * Specifies an icon to be displayed on the right side of the button.
	 */
	icon?: ReactElement;
	/**
	 * If true, the button will be in a loading state.
	 * @default false
	 */
	isLoading?: boolean;
	/**
	 * If true, the button will be disabled.
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * aria-label for the isLoading state.
	 */
	ariaLabelLoading?: string;
}

export const Button = (props: ButtonProps) => {
	const {
		isLoading,
		variant = 'primary',
		size = 'medium',
		fullWidth = false,
		icon,
		className = '',
		disabled = false,
		children,
		ariaLabelLoading,
		'aria-disabled': ariaDisabled,
		...buttonProps
	} = props;
	const { ...ariaAttributes } = useAriaProperties(props);

	const baseClass = 'krul-button';

	const loadingClass = `${baseClass}_loading`;
	const iconClass = `${baseClass}_icon`;
	const textClasses = `${baseClass}_text`;

	const classes = cx(
		baseClass,
		fullWidth && `${baseClass}_full-width`,
		variant && `${baseClass}_${variant}`,
		size && `${baseClass}_${size}`,
		isLoading && `${baseClass}_loading`,
		(disabled || ariaDisabled) && `${baseClass}_disabled`,
	);

	return (
		<button {...buttonProps} {...ariaAttributes} type="button" className={classes} disabled={disabled}>
			<span className={textClasses}>{children}</span>
			{!!icon && <div className={iconClass}>{icon}</div>}
		</button>
	);
};
