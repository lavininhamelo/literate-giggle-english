import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { AddWord } from 'domain/Word';
import { HttpCreateNewWord } from 'application/features';

export const buildCreateNewWord = (): AddWord =>
	new HttpCreateNewWord(buildApiUrl('/words'), buildAxiosHttpClient());
