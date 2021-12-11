import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';

import React, { ChangeEvent, useState } from 'react';
import { Container, Title } from './styles';

interface Props {}

export const Questionnaire: React.FC<Props> = () => {
	const [quest, setQuest] = useState('');
	const [quest1, setQuest1] = useState('');

	return (
		<Container className="p-8">
			<Title>Create new Questionnaire</Title>
			<Input
				className="mt-4"
				type="text"
				name="questionnaire"
				label="Question"
				value={quest}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setQuest(event.target.value)}
			/>
			<Input
				className="mt-4"
				type="text"
				name="Meaning"
				label="Teste"
				value={quest1}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setQuest1(event.target.value)}
			/>
			<Button className="mt-4">Submit</Button>
		</Container>
	);
};
