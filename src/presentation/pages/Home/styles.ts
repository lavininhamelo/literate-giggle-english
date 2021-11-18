import Button from 'presentation/components/Form/Button';
import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`w-full h-full flex`};
`;
export const Sidebar = styled.section`
	background-color: ${(props) => props.theme.backgroundLightGray};
	${tw`w-5/12 h-full rounded-3xl p-8 flex flex-col items-start`};
`;
export const ContentWrapper = styled.section`
	${tw`w-7/12 h-full p-8`};
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
	${tw`flex w-full justify-between mt-8 my-4 mb-4`};
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
