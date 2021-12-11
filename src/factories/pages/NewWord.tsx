import React from 'react';

import { Word } from 'presentation/pages/New/Word';
import { makeCreateNewWord } from 'factories/features';

export const WordPage: React.FC = () => {
	let createNewWord = makeCreateNewWord();
	return <Word createNewWord={createNewWord} />;
};
