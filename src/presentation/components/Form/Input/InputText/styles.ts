import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`flex flex-col h-auto`};
`;

export const Label = styled.label`
	${tw`mb-2`};
	color: ${(props) => props.theme.textLabel};
`;

export const Input = styled.input`
	${tw`bg-transparent mx-2 text-sm flex-1`};
`;

export const InputWrapper = styled.div`
	background-color: ${(props) => props.theme.background};
	${tw`rounded border border-solid border-gray-200  h-12
	flex items-center px-4`};
	&:focus-within {
		border-color: ${(props) => props.theme.primary};
		${tw`shadow-md`};
	}
`;
