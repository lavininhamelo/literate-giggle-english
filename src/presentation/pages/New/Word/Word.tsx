import React, { ChangeEvent, useState } from 'react';
import { AddWord } from 'domain/Word';

import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';

import { Container, Title } from './styles';
import { processRequest } from 'presentation/helpers/processRequest';
import InputSelect from 'presentation/components/Shared/Form/Input/InputSelect/InputSelext';

const list = [
	{ id: 1, name: { firstname: 'Durward', lastname: 'Reynolds' }, unavailable: false },
	{ id: 2, name: { firstname: 'Kenton ', lastname: 'Towne' }, unavailable: false },
	{ id: 3, name: { firstname: 'Therese ', lastname: 'Wunsch' }, unavailable: false },
	{ id: 4, name: { firstname: 'Benedict ', lastname: 'Kessler' }, unavailable: true },
	{ id: 5, name: { firstname: 'Katelyn ', lastname: 'Rohan' }, unavailable: false },
];

const list2 = ['a', 'b', 'c', 'd', 'e'];
interface Props {
	createNewWord: AddWord;
}

export const Word: React.FC<Props> = ({ createNewWord }, rest) => {
	const [wordData, setWordData] = useState({
		word: '',
		meaning: '',
		isIntern: false,
	});

	const onSubmit = (event: any) => {
		processRequest(event, createNewWord, wordData);
	};

	return (
		<Container {...rest} className="p-8">
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
				className="my-4"
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
			<InputSelect list={list} option="name.firstname" label="Category" />
			<Button className="mt-4" onClick={(e) => onSubmit(e)}>
				Submit
			</Button>
		</Container>
	);
};
