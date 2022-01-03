import { Icon } from 'presentation/components/Shared/Icon';
import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { lighten } from 'polished';

interface Props extends HTMLAttributes<HTMLButtonElement> {
	color: string;
	icon: string;
}

const ButtonReview: React.FC<Props> = ({ color, icon, children, ...props }) => {
	return (
		<Container {...props}>
			<ButtonContainer color={color}>
				<Icon color={color} name={icon} />
			</ButtonContainer>
			<ButtonText color={color}>{children}</ButtonText>
		</Container>
	);
};

export default ButtonReview;

/** Styles */

export const Container = styled.div`
	${tw`flex flex-col items-center justify-center p-4`};
`;

export const ButtonContainer = styled.button`
	${tw`flex items-center justify-center p-2 rounded-full shadow hover:shadow-md active:shadow-xl`};
	background: ${(props) => props.color && lighten(0.25, props.color)};
	&:active {
		background: ${(props) => props.color && lighten(0.3, props.color)};
	}
`;

export const ButtonText = styled.p`
	color: ${(props) => props.color};
	${tw`font-bold mt-2`};
`;
