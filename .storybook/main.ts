import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
	stories: ['../src/**/*.story.tsx'],
	addons: [
		'@storybook/addon-links',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions',
		'@storybook/addon-essentials',
		{
			name: '@storybook/addon-styling-webpack',
			options: {
				rules: [
					{
						test: /\.css$/,
						use: [
							'style-loader',
							{
								loader: 'css-loader',
								options: { importLoaders: 1 },
							},
							{
								loader: require.resolve('postcss-loader'),
								options: {
									implementation: require.resolve('postcss'),
									postcssOptions: {
										plugins: [require('postcss-nested')],
									},
								},
							},
						],
					},
				],
			},
		},
	],
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: false,
	},
	typescript: {
		check: true,
	},
	staticDirs: ['../public'],
};
export default config;
