import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Icon } from '../Shared/Icon';

interface Props extends HTMLAttributes<HTMLDivElement> {
	isCorrect?: boolean;
}

export const Result: React.FC<Props> = ({ isCorrect = true, children }, rest) => {
	return (
		<Container {...rest} isCorrect={isCorrect}>
			{!!isCorrect ? (
				<Icon color="#FF0000" name="highlight_off" />
			) : (
				<Icon color="#00BB10" name="task_alt" />
			)}
			<p>{children}</p>
		</Container>
	);
};

export default Result;

export const Container = styled.div`
	${tw`rounded shadow flex items-center p-4 text-gray-700 text-lg border-solid border-2 my-4`}
	${(props) =>
		props.isCorrect ? tw`bg-red-100 border-red-500` : tw`bg-green-100 border-green-500`}
		p {
		margin: 0px 8px;
	}
`;
