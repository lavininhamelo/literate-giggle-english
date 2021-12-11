import { makeApiUrl, makeAxiosHttpClient } from 'factories/http';
import { AddWord } from 'domain/Word';
import { RemoteCreateNewWord } from 'application/features';

export const makeCreateNewWord = (): AddWord =>
	new RemoteCreateNewWord(makeApiUrl('/words'), makeAxiosHttpClient());
