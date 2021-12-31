import React, { useState } from 'react';

import { AddWord } from 'domain/Word';
import { processRequest } from 'presentation/helpers/processRequest';
import { useStateCategory } from 'presentation/state/';
import { Category } from 'domain/Category';

export function useNewWord(createNewWord: AddWord) {
	const [categories] = useStateCategory();
	const [selected, setSelected] = useState<Category>();
	const handlerChange = (event: any) => {
		let category = event;
		setSelected(category);
	};

	const [wordData, setWordData] = useState<AddWord.Input>({
		word: '',
		meaning: '',
		isIntern: false,
	});

	const onSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault();
		const word = wordData;
		word.categories = [selected];
		console.log(word);
		processRequest(createNewWord, word);
	};

	return {
		wordData,
		onSubmit,
		setWordData,
		categories,
		handlerChange,
		selected,
	};
}
