import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { RunSetupStudyObjects } from 'application/features';
import { generateDateInterval } from 'application/helpers';

const phrasesUrl = buildApiUrl('/phrases/');
const synonymsUrl = buildApiUrl('/synonyms/');
const wordsUrl = buildApiUrl('/words/');

const urls = [phrasesUrl, synonymsUrl, wordsUrl];

export const buildSetupStudyObjects = () =>
	new RunSetupStudyObjects(urls, buildAxiosHttpClient(), generateDateInterval);
