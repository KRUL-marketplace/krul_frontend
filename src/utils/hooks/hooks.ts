'use client';

import { AriaAttributes, useEffect, useState } from 'react';

interface Props {
	isLoading?: boolean;
	ariaLabelLoading?: string;
	'aria-label'?: string;
	'aria-labelledby'?: string;
	'aria-disabled'?: boolean | 'true' | 'false';
}

export const useAriaProperties = ({
	isLoading,
	ariaLabelLoading,
	'aria-label': ariaLabel = '',
	'aria-labelledby': ariaLabelledby = '',
	'aria-disabled': ariaDisabled,
}: Props): AriaAttributes => {
	const nonEmptyAriaLabel = isLoading && ariaLabelLoading ? ariaLabelLoading : ariaLabel;

	return {
		'aria-label': nonEmptyAriaLabel ? nonEmptyAriaLabel : undefined,
		'aria-labelledby': !nonEmptyAriaLabel && ariaLabelledby ? ariaLabelledby : undefined,
		'aria-disabled': isLoading ? true : ariaDisabled,
	};
};

export const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState<{ width: number; height: number }>({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
	});

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		screenSize,
		isMobile: screenSize.width <= 575.98,
		isMobileLandscape: screenSize.width >= 575.99 && screenSize.width <= 767.98,
		isTablet: screenSize.width >= 767.99 && screenSize.width <= 1199.97,
		isLaptop: screenSize.width >= 1199.98 && screenSize.width <= 1399.98,
		isDesktop: screenSize.width >= 1399.99,
	};
};
