import type { NextPage } from 'next';
import { buildCreateNewPhrase } from 'factories/features';
import { Phrase } from 'presentation/pages/New/Phrase';

const PhrasePage: NextPage = () => {
	let createNewPhrase = buildCreateNewPhrase();
	return <Phrase createNewPhrase={createNewPhrase} />;
};

export default PhrasePage;
