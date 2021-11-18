import React, { InputHTMLAttributes } from 'react';

import { Container, Label, InputArea } from './styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	name: string;
	label?: string;
}

const Input: React.FC<Props> = ({ name, label, onChange, ...props }) => {
	return (
		<Container>
			{label && <Label htmlFor={name}>{label}</Label>}
			<InputArea id={name} onChange={onChange} {...props} />
		</Container>
	);
};

export default Input;
