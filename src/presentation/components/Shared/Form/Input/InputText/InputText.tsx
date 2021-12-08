import { Icon } from 'presentation/components/Shared/Icon';
import React, { HTMLAttributes } from 'react';
import { Label, Input, Container, InputWrapper, Result } from './styles';
import { useTheme } from 'styled-components';

interface Result {
	message: string;
	isError: boolean;
}

interface InputProps extends HTMLAttributes<HTMLInputElement> {
	name: string;
	variant?: 'default' | 'grayish' | 'flat' | 'muted';
	sizing?: 'sm' | 'md' | 'lg';
	value: string;
	required?: boolean;
	label?: string;
	type: string;
	labelClasses?: string;
	inputClasses?: string;
	leftIcon?: string;
	rightIcon?: string;
	disabled?: boolean;
	result?: Result;
	onIconClick?(): void;
}

export const InputText: React.FC<InputProps> = ({
	name,
	label,
	leftIcon,
	rightIcon,
	type,
	onIconClick,
	result = null,
	className,
	...rest
}) => {
	let theme = useTheme();

	return (
		<Container className={className}>
			{!!label && <Label htmlFor={name}>{label}</Label>}
			<InputWrapper result={result}>
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
			{!!result ? <Result isError={result.isError}>{result.message}</Result> : null}
		</Container>
	);
};
