import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { CreateCategory } from 'domain/Category';
import { HttpCreateCategory } from 'application/features';

export const buildCreateCategory = (): CreateCategory =>
	new HttpCreateCategory(buildApiUrl('/categories'), buildAxiosHttpClient());
