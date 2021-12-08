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
	${tw`rounded border border-solid border-gray-200 h-12 flex items-center px-4`};
	${(props) =>
		typeof props.result?.isError === 'boolean'
			? props.result.isError
				? tw`border-red-500`
				: tw`border-green-500`
			: tw`border-gray-200`};
	&:focus-within {
		border-color: ${(props) => props.theme.primary};
		${tw`shadow-md`};
	}
`;

export const Result = styled.div`
	${tw` h-8 flex items-center `};
	${(props) => (props.isError ? tw`text-red-500` : tw`text-green-500`)};
`;
