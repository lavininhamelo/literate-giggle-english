import { makeApiUrl, makeAxiosHttpClient } from '../http';
import { ListWords } from '../../../domain/Word/usecases/list-words';
import { RemoteListWords } from '../../../application/features';

export const makeRemoteListWords = (): ListWords => {
	return new RemoteListWords(makeApiUrl('/words'), makeAxiosHttpClient());
};
