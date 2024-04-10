import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
	addons: ['@storybook/addon-onboarding', '@storybook/addon-links', '@storybook/addon-essentials', '@chromatic-com/storybook', '@storybook/addon-interactions'],
	webpackFinal: async (config: any) => {
		config.module.rules = [
			...config.module.rules,
			{
				test: /.tsx?$/,
				use: [
					{
						loader: '@linaria/webpack-loader',
						options: {
							classNameSlug: (title: string) => `${title.toString().toLowerCase()}`,
							variableNameSlug: '[componentName]',
							sourceMap: true,
						},
					},
				],
				exclude: /node_modules/,
			},
		];
		config.resolve.modules = [...(config.resolve.modules || []), path.resolve(__dirname, '../src')];
		return config;
	},
	framework: {
		name: '@storybook/nextjs',
		options: {},
	},
	docs: {
		autodocs: true,
	},
	typescript: {
		check: true,
	},
	staticDirs: ['../public'],
};
export default config;
