import { Icon } from '../../Icon';
import React, { HTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
	variant?: 'default' | 'outline' | 'text';
	shadow?: boolean;
	disable?: boolean;
	format?: 'default' | 'round' | 'square';
	icon?: string;
	rightIcon?: string;
	color?: string;
	size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
	variant = 'default',
	format = 'default',
	shadow = true,
	disable = false,
	size = 'md',
	color = 'primary',
	children,
	...props
}) => {
	return (
		<Container
			variant={variant}
			format={format}
			color={color}
			size={size}
			shadow={shadow}
			{...props}>
			{props.icon && <Icon name={props.icon} color="#fff" />}
			{children && <p>{children}</p>}
			{props.rightIcon && <Icon name={props.rightIcon} color="#fff" />}
		</Container>
	);
};

export { Button };
