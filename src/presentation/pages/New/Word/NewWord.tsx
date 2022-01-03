import React, { ChangeEvent, useState } from 'react';
import { AddWord } from 'domain/Word';

import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';

import { Container, Title } from './styles';
import InputSelect from 'presentation/components/Shared/Form/Input/InputSelect/InputSelext';
import { useNewWord } from './useNewWord';

interface Props {
	createNewWord: AddWord;
}

export const Word: React.FC<Props> = ({ createNewWord }, rest) => {
	const { wordData, setWordData, categories, selected, onSubmit, handlerChange } = useNewWord(
		createNewWord,
	);

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
			<InputSelect
				onChange={(e: React.FormEvent<HTMLSelectElement>) => handlerChange(e)}
				list={categories}
				value={selected}
				option="name"
				label="Category"
			/>
			<Button className="mt-4" onClick={(e) => onSubmit(e)}>
				Submit
			</Button>
		</Container>
	);
};
