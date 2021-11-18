import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.button`
	${tw`h-12 w-auto rounded-md shadow-sm px-4`};
	background: ${(props) => props.theme.primary};
	color: white;
	font-size: 1rem;
	&:hover {
		filter: brightness(0.95);
		transition: 0.3s;
	}

	&:active {
		filter: brightness(0.9);
		transition: 0.2s;
	}
`;
