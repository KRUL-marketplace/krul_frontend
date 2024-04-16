import { Meta, StoryFn } from '@storybook/react';
import { DemoCard } from '@/storybook/demo-card/demo-card';
import { Button } from '@/ui/button/button';
import { iconBell } from '@/ui/icons/icon-bell';
import { iconCalendar } from '@/ui/icons/icon-calendar';
import { iconCheck } from '@/ui/icons/icon-check';

const meta = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		children: {
			defaultValue: 'Button',
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
		iconLeft: {
			options: ['Bell', 'Calendar', 'Check', 'No Icon'],
			mapping: {
				Bell: iconBell,
				Calendar: iconCalendar,
				Check: iconCheck,
				'No Icon': null,
			},
		},
		iconRight: {
			options: ['Bell', 'Calendar', 'Check', 'No Icon'],
			mapping: {
				Bell: iconBell,
				Calendar: iconCalendar,
				Check: iconCheck,
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
		controls: { expanded: true, sort: 'none' },
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

export const Playground = (args: StoryFn<typeof Button>) => <Button {...args}>Button</Button>;
