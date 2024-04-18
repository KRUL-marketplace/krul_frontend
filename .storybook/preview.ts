import type { Preview } from '@storybook/react';

import '@/utils/styles/tokens/dark/darkTheme.css';
import '@/utils/styles/tokens/light/lightTheme.scss';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
				expanded: false,
			},
		},
		layout: 'fullscreen',
	},
};

export default preview;
