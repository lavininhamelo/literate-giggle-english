import styled from 'styled-components';
import tw from 'twin.macro';
import ThemeProvider from 'styled-components';
import { ButtonProps } from '.';
import { darken, lighten } from 'polished';

export const Container = styled.button<ButtonProps>`
	${tw`flex items-center justify-center hover:cursor-pointer text-white`};
	font-weight: 500;
	${(props) => (props.shadow ? tw`shadow` : tw`shadow-sm`)};
	${(props) => getButtonSize(props.size)};
	${(props) => getButtonFormat(props.format, props.size)};
	${(props) => getButtonVariant(props.variant, props.color, props.theme)};
	&:active {
		${tw`shadow-md`};
	}
	&:disabled {
		cursor: not-allowed;
		pointer-events: all !important;
		background: ${(props) => lighten(0.05, getColor(props.color, props.theme))};
		transform: none;
	}
	&:hover {
		transform: translate(0px, -0.5px);
	}

	p {
		margin: 0px 8px;
	}
`;

function getColor(color = 'primary', theme: ThemeProvider) {
	let finalColor: string;
	switch (color) {
		case 'primary':
			finalColor = theme.primary;
			break;
		case 'secondary':
			finalColor = theme.secondary;
			break;
		case 'info':
			finalColor = theme.info;
			break;
		case 'success':
			finalColor = theme.success;
			break;
		case 'warning':
			finalColor = theme.warning;
			break;
		case 'error':
			finalColor = theme.error;
			break;
		default:
			finalColor = color;
	}
	return finalColor;
}

function getButtonSize(size: keyof typeof buttonSize = 'md') {
	const buttonSize = {
		sm: tw`h-7 px-2 min-w-7`,
		md: tw`h-12 px-4 min-w-12`,
		lg: tw`h-14 px-4 min-w-14`,
	};
	return buttonSize[size];
}

function getButtonVariant(
	variant: keyof typeof buttonVariant = 'default',
	color: string = 'primary',
	theme: ThemeProvider,
) {
	const mainColor = getColor(color, theme);
	const buttonVariant = {
		default: () => {
			return `
				background: ${mainColor};
				&:hover{
					background: ${darken(0.04, mainColor)};
				}
				&:active{
					background: ${darken(0.07, mainColor)};
				}
			`;
		},
		outline: () => {
			return `
				border: 1px solid ${mainColor};
				color: ${mainColor};
				background: none;
				box-shadow: none;
				&:hover {
					background: ${mainColor};
					color: white;
				}
				&:active{
					background: ${darken(0.07, mainColor)};
				}
			`;
		},
		text: () => {
			return `
				background: none;
				box-shadow: none;
				color: ${mainColor};
			
			`;
		},
	};
	return buttonVariant[variant];
}

function getButtonFormat(format: keyof typeof buttonFormat = 'default', size = 'md') {
	const buttonFormat = {
		default: tw`rounded`,
		round: tw`rounded-full p-0`,
		square: tw`rounded-none`,
	};
	return buttonFormat[format];
}
