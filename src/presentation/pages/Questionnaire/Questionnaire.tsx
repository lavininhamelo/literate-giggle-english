import Button from 'presentation/components/Form/Button';
import Input from 'presentation/components/Form/Input';
import React, { useState } from 'react';

interface Props {}

export const Questionnaire: React.FC<Props> = () => {
	const [quest, setQuest] = useState('');
	const [quest1, setQuest1] = useState('');

	return (
		<div className="p-8">
			<Input
				name="questionnaire"
				label="Questionnaire"
				value={quest}
				onChange={(event) => setQuest(event.target.value)}
			/>
			<Input
				name="questionnaire1"
				label="Teste"
				value={quest1}
				onChange={(event) => setQuest1(event.target.value)}
			/>
			<Button>Submit</Button>
		</div>
	);
};
