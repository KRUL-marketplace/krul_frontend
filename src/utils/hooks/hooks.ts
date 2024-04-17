import { AriaAttributes } from 'react';

interface Props {
	isLoading?: boolean;
	ariaLabelLoading?: string;
	'aria-label'?: string;
	'aria-labelledby'?: string;
	'aria-disabled'?: boolean | 'true' | 'false';
}

export const useAriaProperties = ({ isLoading, ariaLabelLoading, 'aria-label': ariaLabel = '', 'aria-labelledby': ariaLabelledby = '', 'aria-disabled': ariaDisabled }: Props): AriaAttributes => {
	const nonEmptyAriaLabel = isLoading && ariaLabelLoading ? ariaLabelLoading : ariaLabel;

	return {
		'aria-label': nonEmptyAriaLabel ? nonEmptyAriaLabel : undefined,
		'aria-labelledby': !nonEmptyAriaLabel && ariaLabelledby ? ariaLabelledby : undefined,
		'aria-disabled': isLoading ? true : ariaDisabled,
	};
};
