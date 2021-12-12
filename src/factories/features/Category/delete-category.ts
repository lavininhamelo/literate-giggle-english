import { makeApiUrl, makeAxiosHttpClient } from 'factories/http';
import { DeleteCategory } from 'domain/Category';
import { RemoteDeleteCategory } from 'application/features';

export const makeDeleteCategory = (): DeleteCategory =>
	new RemoteDeleteCategory(makeApiUrl('/categories'), makeAxiosHttpClient());
