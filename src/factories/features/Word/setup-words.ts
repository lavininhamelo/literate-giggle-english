import { makeApiUrl, makeAxiosHttpClient } from 'factories/http';
import { RunSetupWords } from 'application/features';

export const makeRunSetupWords = () =>
	new RunSetupWords(makeApiUrl('/words/'), makeAxiosHttpClient());
