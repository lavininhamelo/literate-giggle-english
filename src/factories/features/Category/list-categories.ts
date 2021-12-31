import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { ListCategories } from 'domain/Category/usecases/list-categories';
import { HttpListCategories } from 'application/features/Category/list-category';

export const buildHttpListCategories = (): ListCategories => {
	return new HttpListCategories(buildApiUrl('/categories'), buildAxiosHttpClient());
};
