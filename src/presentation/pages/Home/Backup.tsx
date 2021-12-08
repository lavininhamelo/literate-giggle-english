import { ListWords } from 'domain/Word/usecases/list-words';
import { SetupWords } from 'domain/Word/usecases/setup-words';
import React, { useEffect, useState } from 'react';

type Props = {
	getWords: ListWords;
	setupWords: SetupWords;
};

export const Home: React.FC<Props> = ({ getWords, setupWords }) => {
	const [words, setWords] = useState([] as SetupWords.Output);

	useEffect(() => {
		async function load() {
			const list = await getWords.run();
			const setupList = await setupWords.run(list);
			setWords(setupList);
		}
		load();
	}, []);

	return (
		<div className="pa-4">
			<h1 className="text-blue-500 ml-8">Welcome to the Next Clean!</h1>
			<ul>
				{words.map((word) => (
					<li key={word.id}>{word.word}</li>
				))}
			</ul>
		</div>
	);
};
