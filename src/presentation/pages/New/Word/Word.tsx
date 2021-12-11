import React, { ChangeEvent, useState } from 'react';
import { AddWord } from 'domain/Word';

import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';

import { Container, Title } from './styles';
import { handleError } from 'presentation/helpers/handlerError';

interface Props {
	createNewWord: AddWord;
}

export const Word: React.FC<Props> = ({ createNewWord }, rest) => {
	const [wordData, setWordData] = useState({
		word: '',
		meaning: '',
		isIntern: false,
	});

	const handlerSubmit = (e: any) => {
		e.preventDefault();
		createNewWord
			.run(wordData)
			.then((res) => console.log(res))
			.catch((err) => handleError(err));
	};

	return (
		<Container className="p-8">
			<Title>Create new Word</Title>
			<Input
				className="mt-4"
				type="text"
				name="word"
				label="Word"
				value={wordData.word}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setWordData({
						...wordData,
						word: event.target.value,
					})
				}
			/>
			<Input
				className="mt-4"
				type="text"
				name="Meaning"
				label="Meaning"
				value={wordData.meaning}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setWordData({
						...wordData,
						meaning: event.target.value,
					})
				}
			/>
			<Button className="mt-4" onClick={(e) => handlerSubmit(e)}>
				Submit
			</Button>
		</Container>
	);
};
