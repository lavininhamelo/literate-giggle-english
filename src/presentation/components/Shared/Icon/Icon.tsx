import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

const iconType = {
	outlined: 'material-icons-outlined',
	filled: 'material-icons',
	rounded: 'material-icons-round',
	sharp: 'material-icons-sharp',
	twoTone: 'material-icons-two-tone',
};

// TODO To implement icon size
export interface Props extends HTMLAttributes<HTMLSpanElement> {
	name?: string;
	size?: string;
	color?: string;
	type?: keyof typeof iconType;
}

const Icon: React.FC<Props> = ({
	name = 'home',
	size = '1.5rem',
	type = 'filled',
	className,
	...rest
}) => {
	const classNames = [iconType[type], className].filter(Boolean).join(' ').trim();
	return (
		<Container size={size} className={classNames} {...rest}>
			{name}
		</Container>
	);
};

const Container = styled.span<Props>`
	color: ${(props) => props.color || props.theme.primary};
	font-size: ${(props) => props.size};
`;

export { Icon };
