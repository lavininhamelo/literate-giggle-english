import React from 'react';

import { Container, Slider, Input } from './styles';

const Toggle: React.FC = () => {
	return (
		<Container>
			<Input type="checkbox" />
			<Slider />
		</Container>
	);
};

export default Toggle;
