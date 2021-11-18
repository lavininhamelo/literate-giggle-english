import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
	${tw`flex flex-col`};
`;

export const Label = styled.label`
	${tw`text-sm font-medium block mb-2 uppercase`};
	color: ${(props) => props.theme.inputLabel};
`;

export const InputArea = styled.input`
	${tw`border border-solid border-gray-300 text-gray-900 sm:text-sm rounded block w-full p-2.5 shadow-sm`};

	&:focus {
		border-width: 2px;
		border-color: ${(props) => props.theme.primary};
	}
`;
