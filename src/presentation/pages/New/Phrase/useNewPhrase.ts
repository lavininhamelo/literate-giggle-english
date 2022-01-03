import React, { useState } from 'react';

import { CreatePhrase } from 'domain/Phrase';
import { processRequest } from 'presentation/helpers/processRequest';
import { useStateCategory } from 'presentation/state/';
import { Category } from 'domain/Category';

export function useNewPhrase(createNewPhrase: CreatePhrase) {
	const [categories] = useStateCategory();
	const [selected, setSelected] = useState<Category>();
	const handlerChange = (event: any) => {
		let category = event;
		setSelected(category);
	};

	const [phraseData, setPhraseData] = useState<CreatePhrase.Input>({
		phrase: '',
		meaning: '',
	});

	const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		const phrase = phraseData;
		phrase.categories = [selected];
		processRequest(createNewPhrase, phrase);
	};

	return {
		phraseData,
		onSubmit,
		setPhraseData,
		categories,
		handlerChange,
		selected,
	};
}
