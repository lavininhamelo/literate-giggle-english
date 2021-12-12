import type { NextPage } from 'next';
import { makeCreateNewWord } from 'factories/features';
import { Word } from 'presentation/pages/New/Word';

const WordPage: NextPage = () => {
	let createNewWord = makeCreateNewWord();
	return <Word createNewWord={createNewWord} />;
};

export default WordPage;
