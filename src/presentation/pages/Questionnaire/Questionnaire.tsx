import Question from 'presentation/components/Question/Question';
import OptionList from 'presentation/components/Option/OptionList';
import Result from 'presentation/components/Result/Result';
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
			<Title>Create new training</Title>
			<Input
				className="mt-4"
				type="text"
				name="questionnaire"
				label="Word"
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
			<Question>
				Write
				<Question emphasis={true}> "Qual é o seu nome?" </Question>
				in English:
			</Question>
			<Input
				className="mt-4"
				type="text"
				name="Meaning"
				value={quest1}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setQuest1(event.target.value)}
			/>

			<OptionList isMultiple></OptionList>

			<Input
				className="mt-4"
				type="text"
				name="Synonym 1"
				label="Synonym 1"
				result={{
					isError: false,
					message: "This's answer is correct!",
				}}
				value={quest1}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setQuest1(event.target.value)}
			/>
			<Input
				className="mt-4"
				type="text"
				name="Synonym 2"
				label="Synonym 2"
				result={{
					isError: true,
					message: "This's answer is incorrect!",
				}}
				value={quest1}
				onChange={(event: ChangeEvent<HTMLInputElement>) => setQuest1(event.target.value)}
			/>

			<Button className="mt-4">Try</Button>
			<Result isCorrect>Lorem ipsum dolor sit amet, consectetur adipiscing!</Result>
			<Result isCorrect={false}>Lorem ipsum dolor sit amet, consectetur adipiscing!</Result>
		</Container>
	);
};
