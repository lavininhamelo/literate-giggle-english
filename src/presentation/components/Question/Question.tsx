import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	emphasis?: boolean;
}

const Question: React.FC<Props> = ({ children, emphasis, className }, rest) => {
	return (
		<Container {...rest} className={className} emphasis={emphasis} as={emphasis ? 'b' : 'p'}>
			{children}
		</Container>
	);
};

export { Question };

const Container = styled.p`
	color: ${(props) => (props.emphasis ? props.theme.primary : props.theme.textLabel)};
	${(props) => (props.emphasis ? tw`font-bold` : tw`font-medium`)};
	${tw`text-xl md:text-2xl lg:text-3xl `};
`;
