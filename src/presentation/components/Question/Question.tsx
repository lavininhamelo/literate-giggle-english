import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
	emphasis?: boolean;
}

const Question: React.FC<Props> = ({ children, emphasis }, rest) => {
	return (
		<Container {...rest} emphasis={emphasis} as={emphasis ? 'span' : 'p'}>
			{children}
		</Container>
	);
};

export default Question;

const Container = styled.p`
	color: ${(props) => (props.emphasis ? props.theme.primary : props.theme.textLabel)};
	${(props) => (props.emphasis ? tw`mx-2 font-bold` : tw`font-medium`)};
	${tw`flex text-xl md:text-2xl`};
`;
