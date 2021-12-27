import React, { Component, HTMLAttributes } from 'react';
import Question from 'presentation/components/Question/Question';

import { Container } from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
	title?: string;
	isCorrect?: boolean;
}

const Card: React.FC<Props> = ({ children, title }, rest) => {
	return (
		<Container {...rest}>
			{title && <Question className="mb-8">{title}</Question>}
			<div>{children}</div>
		</Container>
	);
};

export { Card };
