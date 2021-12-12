import type { NextPage } from 'next';
import { buildCreateNewWord } from 'factories/features';
import { Word } from 'presentation/pages/New/Word';

const WordPage: NextPage = () => {
	let createNewWord = buildCreateNewWord();
	return <Word createNewWord={createNewWord} />;
};

export default WordPage;
