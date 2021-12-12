import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { UpdateWordLevel } from 'domain/Word/usecases/update-level-word';
import { SetWordLevel } from 'application/features';

export const buildSetWordLevel = (): UpdateWordLevel =>
	new SetWordLevel(buildApiUrl('/words'), buildAxiosHttpClient());
