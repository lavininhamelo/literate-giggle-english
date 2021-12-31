import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	background-color: ${(props) => props.theme.backgroundLightGray};
	${tw`p-8 w-full h-full flex flex-col overflow-y-auto`};
`;

export const Title = styled.h1`
	${tw`text-xl mb-4 font-bold`};
	color: ${(props) => props.theme.text};
`;

export const CategoriesWrapper = styled.div`
	${tw`flex w-full flex-wrap gap-8 `};
`;
