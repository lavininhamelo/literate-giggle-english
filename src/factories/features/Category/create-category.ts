import { makeApiUrl, makeAxiosHttpClient } from 'factories/http';
import { CreateCategory } from 'domain/Category';
import { RemoteCreateCategory } from 'application/features';

export const makeCreateCategory = (): CreateCategory =>
	new RemoteCreateCategory(makeApiUrl('/categories'), makeAxiosHttpClient());
