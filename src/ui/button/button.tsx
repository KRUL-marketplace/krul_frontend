import React, { ButtonHTMLAttributes, ReactElement } from 'react';
import cx from 'classnames';
import './button.css';
import { useAriaProperties } from '@/utils/hooks/hooks';

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
	 * Specifies an icon to be displayed on the left side of the button.
	 */
	iconLeft?: ReactElement;
	/**
	 * Specifies an icon to be displayed on the right side of the button.
	 */
	iconRight?: ReactElement;
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
		iconLeft,
		iconRight,
		className = '',
		disabled = false,
		children,
		ariaLabelLoading,
		'aria-disabled': ariaDisabled,
		...buttonProps
	} = props;
	const { ...ariaAttributes } = useAriaProperties(props);

	const baseClass = 'krul-button';

	const loadingClass = `${baseClass}__loading`;
	const iconLeftClass = cx(
		`${baseClass}__inner-icon_container ${baseClass}__inner-icon_left`,
		isLoading && `${baseClass}__inner-content_loading`,
	);
	const iconRightClass = cx(
		`${baseClass}__inner-icon_container ${baseClass}__inner-icon_right`,
		isLoading && `${baseClass}__inner-content_loading`,
	);
	const textClasses = cx(
		`${baseClass}__inner-text_crop-text ${baseClass}__text-flex`,
		isLoading && `${baseClass}__inner-content_loading`,
	);

	const classes = cx(
		baseClass,
		fullWidth && `${baseClass}_full-width`,
		variant && `${baseClass}_${variant}`,
		size && `${baseClass}_${size}`,
		isLoading && `${baseClass}_loading`,
		(disabled || ariaDisabled) && `${baseClass}_disabled`,
		(iconLeft || iconRight) && `${baseClass}_${variant}_'with-icon'`,
		iconLeft && !iconRight && `${baseClass}_with_icon_left`,
		!iconLeft && iconRight && `${baseClass}_with_icon_right`,
	);

	return (
		<button {...buttonProps} {...ariaAttributes} type="button" className={classes} disabled={disabled}>
			{iconLeft && <div className={iconLeftClass}>{iconLeft}</div>}
			<span className={textClasses}>{children}</span>
			{iconRight && <div className={iconRightClass}>{iconRight}</div>}
		</button>
	);
};
