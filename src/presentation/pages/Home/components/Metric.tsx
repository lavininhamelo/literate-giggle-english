import { useRouter } from 'next/router';
import { Icon } from 'presentation/components/Shared/Icon';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props {
	icon: string;
	title: string;
	value: number;
	color?: string;
	to: string;
}

const Metric: React.FC<Props> = ({ icon, title, value, color, to }, rest) => {
	const route = useRouter();
	const handlerNewClick = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		route.push('/new/' + to);
	};
	const handlerClick = (event: React.MouseEvent<HTMLElement>) => {
		event.preventDefault();
		route.push('/training/' + to);
	};
	return (
		<Container {...rest} color={color}>
			<Wrapper onClick={handlerClick}>
				<Icon name={icon} color="#FFF" />
				<ValuesWrapper>
					<Title>{title}</Title>
					<Value>{value}</Value>
				</ValuesWrapper>
			</Wrapper>
			<Action onClick={handlerNewClick}>
				<Icon name="add_circle" color="#FFF" />
			</Action>
		</Container>
	);
};

export { Metric };

export const Container = styled.section`
	${tw`flex flex-col justify-center rounded-lg px-6 shadow`};
	color: #fff;
	background-color: ${(props) => props.color};
	min-width: 200px;
	min-height: 100px;
`;

export const Title = styled.h2`
	${tw`uppercase text-sm`};
`;
export const Value = styled.h1`
	${tw`font-bold text-xl`};
`;
export const Wrapper = styled.div`
	${tw`flex items-center cursor-pointer`};
`;

export const ValuesWrapper = styled.div`
	${tw`ml-4`};
`;

export const Action = styled.div`
	${tw`flex justify-end cursor-pointer items-center -mt-4`};
`;
