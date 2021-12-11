import React from 'react';

import { Word } from 'presentation/pages/New/Word';
import { makeCreateNewWord } from 'factories/features/create-new-word';

export const WordPage: React.FC = () => {
	let createNewWord = makeCreateNewWord();
	return <Word createNewWord={createNewWord} />;
};
