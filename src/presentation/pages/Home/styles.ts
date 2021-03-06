import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`w-full h-full flex`};
`;
export const Sidebar = styled.section`
	background-color: ${(props) => props.theme.backgroundLightGray};
	${tw`w-full lg:w-6/12 xl:w-4/12 h-full rounded-3xl p-8 flex flex-col items-start`};
`;

export const ContentWrapper = styled.section`
	${tw`w-full lg:w-6/12 xl:w-8/12 hidden md:block h-full p-8 `};
`;

export const Header = styled.header`
	${tw`flex  w-full items-center`};
`;

export const Title = styled.h1`
	${tw`text-xl font-normal mb-2`};
	color: ${(props) => props.theme.text};

	b {
		${tw`font-bold`};
	}
`;

export const ButtonsWrapper = styled.div`
	${tw`flex items-center mt-4`};
`;

export const MetricsWrapper = styled.main`
	${tw`w-full grid 
	grid-cols-1
	lg:grid-cols-2
	xl:grid-cols-4	
	gap-2  mt-8 my-4 mb-4`};
`;

export const Metric = styled.main`
	${tw`flex w-full`};
`;

export const ProfilePic = styled.div`
	border-width: 2px;
	border-style: solid;
	border-color: ${(props) => props.theme.primary};
	${tw`p-1 rounded-full mr-4`};
`;

export const Image = styled.img`
	${tw`w-20 h-20 rounded-full`};
`;

export const CategoriesWrapper = styled.div`
	${tw`flex flex-col mt-4 overflow-y-auto`};
`;
