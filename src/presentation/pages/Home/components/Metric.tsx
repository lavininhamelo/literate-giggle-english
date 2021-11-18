import { Icon } from 'presentation/components/Icon';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
	icon: string;
	title: string;
	value: number;
	color?: string;
}

const Metric: React.FC<Props> = ({ icon, title, value, color }) => {
	return (
		<Container color={color}>
			<Icon name={icon} color="#FFF" />
			<Wrapper>
				<Title>{title}</Title>
				<Value>{value}</Value>
			</Wrapper>
		</Container>
	);
};

export { Metric };

export const Container = styled.section`
	${tw`flex items-center  rounded-lg py-4 px-6 shadow`};
	color: ${(props) => props.theme.textLight};
	background-color: ${(props) => props.color};
	min-width: 220px;
`;

export const Title = styled.h2`
	${tw`uppercase text-sm`};
`;
export const Value = styled.h1`
	${tw`font-bold text-xl`};
`;
export const Wrapper = styled.div`
	${tw`ml-4`};
`;
