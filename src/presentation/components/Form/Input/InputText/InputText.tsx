import { Icon } from 'presentation/components/Icon';
import React, { HTMLAttributes } from 'react';
import { Label, Input, Container, InputWrapper } from './styles';
import { useTheme } from 'styled-components';
import { ThemeColors } from 'presentation/components/Theme/theme';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	name: string;
	variant?: 'default' | 'grayish' | 'flat' | 'muted';
	sizing?: 'sm' | 'md' | 'lg';
	value: string;
	required?: boolean;
	label?: string;
	error?: string;
	type: string;
	labelClasses?: string;
	inputClasses?: string;
	leftIcon?: string;
	rightIcon?: string;
	disabled?: boolean;
	onIconClick?(): void;
}

export const InputText: React.FC<InputProps> = ({
	name,
	label,
	leftIcon,
	rightIcon,
	type,
	onIconClick,
	...rest
}) => {
	//TODO - Fix the theme interface
	let theme = (useTheme() as unknown) as ThemeColors;

	return (
		<Container>
			{!!label && <Label htmlFor={name}>{label}</Label>}
			<InputWrapper>
				{!!leftIcon && <Icon name={leftIcon} size="1rem" color={theme.textLabel} />}
				<Input {...rest} type={type} name={name} />
				{!!rightIcon && (
					<Icon
						className="cursor-pointer"
						name={rightIcon}
						size="1rem"
						color={theme.textLabel}
						onClick={onIconClick}
					/>
				)}
			</InputWrapper>
		</Container>
	);
};
