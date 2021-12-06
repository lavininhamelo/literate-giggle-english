import { makeApiUrl, makeAxiosHttpClient } from 'main/factories/http';
import { UpdateWordLevel } from 'domain/Word/usecases/update-level-word';
import { SetWordLevel } from 'application/features';

export const makeSetWordLevel = (): UpdateWordLevel =>
	new SetWordLevel(makeApiUrl('/words'), makeAxiosHttpClient());
