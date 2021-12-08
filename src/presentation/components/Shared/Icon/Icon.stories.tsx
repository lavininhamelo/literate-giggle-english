import { Meta, Story } from '@storybook/react';
import { Icon, Props as IconProps } from './Icon';

export default {
	title: 'Icon',
	component: Icon,
	argTypes: {
		name: {
			type: { name: 'string', required: true },
			description: 'Name of the icon',
		},
		color: {
			type: 'string',
			description: 'Color of the icon',
			defaultValue: '#5887FA',
			control: {
				type: 'color',
			},
		},
		type: {
			type: 'string',
			description: 'Style of the icon',
			control: {
				type: 'select',
				options: ['filled', 'outlined', 'twoTone', 'sharp', 'rounded'],
			},
			defaultValue: 'filled',
		},
	},
} as Meta;

export const Default: Story<IconProps> = (args) => <Icon {...args} />;

Default.args = {
	name: 'home',
};
