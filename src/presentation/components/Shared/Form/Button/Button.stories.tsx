import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
	title: 'Button',
	component: Button,
	argTypes: {
		color: {
			type: 'string',
			description: 'Color of the Button',
			defaultValue: '#5887FA',
			control: {
				type: 'color',
			},
		},
		variant: {
			type: 'string',
			defaultValue: 'default',
			control: {
				type: 'select',
				options: ['default', 'outline', 'text'],
			},
		},
		shadow: {
			type: 'boolean',
		},
		disable: {
			type: 'boolean',
		},
		format: {
			type: 'string',
			defaultValue: 'default',
			control: {
				type: 'select',
				options: ['default', 'round', 'square'],
			},
		},
		icon: {
			type: 'string',
		},
		rightIcon: {
			type: 'string',
		},
		size: {
			type: 'string',
			default: 'md',
			control: {
				type: 'select',
				options: ['sm', 'md', 'lg'],
			},
		},
	},
} as Meta;

export const Default: Story<ButtonProps> = (args) => <Button {...args} />;

Default.args = {
	children: 'Button',
};

export const Secondary: Story<ButtonProps> = (args) => <Button {...args} />;

Secondary.args = {
	children: 'Button',
	color: 'secondary',
};

export const Outlined: Story<ButtonProps> = (args) => <Button {...args} />;

Outlined.args = {
	children: 'Button',
	variant: 'outline',
};

export const Text: Story<ButtonProps> = (args) => <Button {...args} />;

Text.args = {
	children: 'Button',
	variant: 'text',
	color: 'secondary',
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
	children: 'Button',
	icon: 'home',
};

export const RightIcon: Story<ButtonProps> = (args) => <Button {...args} />;

RightIcon.args = {
	children: 'Button',
	rightIcon: 'favorite',
	color: 'secondary',
};

export const Round: Story<ButtonProps> = (args) => <Button {...args} />;

Round.args = {
	icon: 'favorite',
	format: 'round',
};
