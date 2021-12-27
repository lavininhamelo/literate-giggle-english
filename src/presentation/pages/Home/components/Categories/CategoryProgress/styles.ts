import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
	${tw`flex items-center mb-8 p-8 rounded-xl shadow-sm`}
	background-color: ${(props) => props.theme.white}
`;
export const ProgressWrapper = styled.aside`
	${tw`flex flex-col items-center mr-8`}

	span {
		${tw`text-2xl font-bold`}
		color: ${(props) => props.theme.secondary};
	}
`;
export const Category = styled.main`
	${tw`flex flex-col`}
`;
export const Progress = styled.div`
	${tw`flex items-center justify-center
	border-solid w-24 h-24	border-8 mb-4 rounded-full
	`}
	border-color: ${(props) => props.theme.primary}
`;
export const Title = styled.h1`
	${tw`text-lg font-bold`}
`;
export const List = styled.ul`
	${tw`flex flex-wrap my-4`}
`;
export const Item = styled.li`
	${tw`flex items-center w-6/12 my-2`}
`;
export const Text = styled.p`
	${tw`ml-2`}
`;

export const Actions = styled.footer`
	${tw`flex`}
`;
