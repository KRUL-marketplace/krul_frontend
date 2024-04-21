import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@/client/ui/atoms/button/button';
import { iconArrowRight } from '@/client/ui/atoms/icons/icon-arrow-right';
import { DemoCard } from '@/storybook/demo-card/demo-card';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			defaultValue: 'В каталог',
		},
		size: {
			control: { type: 'select' },
		},
		variant: {
			control: { type: 'select' },
		},
		ariaLabelLoading: {
			defaultValue: 'Text button - loading',
		},
		icon: {
			options: ['Arrow', 'No Icon'],
			mapping: {
				Arrow: iconArrowRight,
				'No Icon': null,
			},
		},
		'aria-label': {
			control: { type: 'text' },
			description: '`aria-label` for Button component.',
			defaultValue: { summary: 'Segment Control' },
		},
		'aria-labelledby': {
			control: { type: 'text' },
			description:
				'`aria-labelledby` for for Button component. If aria-label is already present, aria-labelledby will not be included',
			defaultValue: { summary: 'Segment Control' },
		},
	},
	args: {
		children: 'Button',
		variant: 'primary',
		size: 'large',
	},
	parameters: {
		controls: { sort: 'none' },
	},
	decorators: [
		Story => (
			<DemoCard>
				<Story />
			</DemoCard>
		),
	],
} satisfies Meta<typeof Button>;

export default meta;

export const Playground = (args: StoryFn<typeof Button>) => <Button {...args} />;
