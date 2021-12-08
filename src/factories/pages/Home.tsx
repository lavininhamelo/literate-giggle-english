import React from 'react';

import { makeRemoteListWords } from 'factories/features/list-words';
import { makeRunSetupWords } from 'factories/features/setup-words';

import { Home } from 'presentation/pages/Home';

export const HomePage: React.FC = () => {
	return <Home getWords={makeRemoteListWords()} setupWords={makeRunSetupWords()} />;
};
