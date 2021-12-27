import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

interface Option {
	id: number;
	name: string;
	isCorrect: boolean;
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	isMultiple?: boolean;
	options: Option[];
}

export const Result: React.FC<Props> = ({ isMultiple = true, options }, rest) => {
	return (
		<Container {...rest}>
			{!!options &&
				options.map((option, index) => (
					<OptionItem key={option.id}>
						<span>{index}.</span>
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
	${tw`rounded text-gray-700 text-lg border-solid`}
`;

const OptionItem = styled.div`
	color: ${(props) => props.theme.text};
	${tw`mb-6 mt-4 flex items-center`};

	span {
		${tw`mr-4`}
	}
`;

const Option = styled.p`
	color: ${(props) => props.theme.text};
	${(props) => (props.multiple ? tw`mx-2 font-bold` : tw`font-medium`)};
	${tw`flex text-lg md:text-xl`};
`;

const InputCheck = styled.input`
	${tw`h-8 w-8 mr-2 border-2 border-solid border-primary`}
`;

const InputRadio = styled.input`
	${tw`h-8 w-8 mr-2 border-2 border-solid border-primary`}
`;
