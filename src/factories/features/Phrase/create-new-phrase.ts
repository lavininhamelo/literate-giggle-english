import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { CreatePhrase } from 'domain/Phrase';
import { HttpCreateNewPhrase } from 'application/features';

export const buildCreateNewPhrase = (): CreatePhrase =>
	new HttpCreateNewPhrase(buildApiUrl('/phrases'), buildAxiosHttpClient());
