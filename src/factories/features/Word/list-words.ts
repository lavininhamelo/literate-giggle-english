import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { ListWords } from 'domain/Word/usecases/list-words';
import { HttpListWords } from 'application/features';

export const buildHttpListWords = (): ListWords => {
	return new HttpListWords(buildApiUrl('/words'), buildAxiosHttpClient());
};
