import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Props extends HTMLAttributes<HTMLDivElement> {
	isMultiple?: boolean;
}

const options = [
	{ id: 1, name: 'Option One' },
	{ id: 2, name: 'Option Two' },
	{ id: 3, name: 'Option Three' },
	{ id: 4, name: 'Option Four' },
];

export const Result: React.FC<Props> = ({ isMultiple = true, children }, rest) => {
	return (
		<Container {...rest}>
			{!!options &&
				options.map((option) => (
					<OptionItem key={option.id}>
						{!!isMultiple ? (
							<InputCheck type="checkbox" />
						) : (
							<InputRadio type="radio" id={option.id} value={option.id} />
						)}
						<Option>{option.name}</Option>
					</OptionItem>
				))}
		</Container>
	);
};

export default Result;

export const Container = styled.div`
	${tw`rounded p-4 text-gray-700 text-lg border-solid`}
`;

const OptionItem = styled.div`
	${tw`mt-4 flex items-center`};
`;

const Option = styled.p`
	color: ${(props) => props.theme.text};
	${(props) => (props.multiple ? tw`mx-2 font-bold` : tw`font-medium`)};
	${tw`flex text-xl md:text-2xl`};
`;

const InputCheck = styled.input`
	${tw`h-8 w-8 mr-2 border-2 border-solid border-primary`}
`;

const InputRadio = styled.input`
	${tw`h-8 w-8 mr-2 border-2 border-solid border-primary`}
`;
