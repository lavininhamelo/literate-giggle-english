import React, { ChangeEvent } from 'react';
import { CreatePhrase } from 'domain/Phrase';
import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';
import InputSelect from 'presentation/components/Shared/Form/Input/InputSelect/InputSelext';
import { Container, Title } from './styles';
import { useNewPhrase } from './useNewPhrase';

interface Props {
	createNewPhrase: CreatePhrase;
}

export const Phrase: React.FC<Props> = ({ createNewPhrase }, rest) => {
	const { phraseData, setPhraseData, categories, selected, onSubmit, handlerChange } = useNewPhrase(
		createNewPhrase,
	);

	return (
		<Container {...rest} className="p-8">
			<Title>Create new Phrase</Title>
			<Input
				className="mt-4"
				type="text"
				name="phrase"
				label="Phrase"
				value={phraseData.phrase}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setPhraseData({
						...phraseData,
						phrase: event.target.value,
					})
				}
			/>
			<Input
				className="my-4"
				type="text"
				name="Meaning"
				label="Meaning"
				value={phraseData.meaning}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setPhraseData({
						...phraseData,
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
