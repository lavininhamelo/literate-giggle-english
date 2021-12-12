import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { DeleteCategory } from 'domain/Category';
import { HttpDeleteCategory } from 'application/features';

export const buildDeleteCategory = (): DeleteCategory =>
	new HttpDeleteCategory(buildApiUrl('/categories'), buildAxiosHttpClient());
