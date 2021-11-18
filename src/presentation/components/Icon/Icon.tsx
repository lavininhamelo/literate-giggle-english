import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface Props extends HTMLAttributes<HTMLSpanElement> {
	name: string;
	color?: string;
}

const Icon: React.FC<Props> = ({ name, ...props }) => {
	return (
		<Container className="material-icons" {...props}>
			{name}
		</Container>
	);
};

const Container = styled.span`
	color: ${(props) => props.color || props.theme.primary};
`;

export { Icon };
