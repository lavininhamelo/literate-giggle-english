import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	background: ${(props) => props.theme.white};
	${tw`shadow-xl rounded-xl hover:shadow-2xl p-8 md:p-16 w-full`};
`;
