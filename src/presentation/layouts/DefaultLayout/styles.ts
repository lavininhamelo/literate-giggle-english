import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.section`
	background: ${(props) => props.theme.background};
	${tw`flex max-h-screen`};
`;

export const WrapperPage = styled.main`
	background: ${(props) => props.theme.background};
	${tw`flex-1 min-h-full m-4 rounded-3xl`};
`;
