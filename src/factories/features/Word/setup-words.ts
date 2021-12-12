import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { RunSetupWords } from 'application/features';

export const buildRunSetupWords = () =>
	new RunSetupWords(buildApiUrl('/words/'), buildAxiosHttpClient());
