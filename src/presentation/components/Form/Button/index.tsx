import React, { HTMLProps } from 'react';

import { Container } from './styles';

interface Props extends HTMLProps<HTMLButtonElement> {}

const Button: React.FC<Props> = ({ children, ...props }) => {
	return <Container {...props}>{children}</Container>;
};

export default Button;
