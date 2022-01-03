import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';
import { UpdateCategory } from 'domain/Category';
import { HttpRegisterCategoryTraining } from 'application/features';

export const buildRegisterCategoryTraining = (): UpdateCategory =>
	new HttpRegisterCategoryTraining(buildApiUrl('/categories'), buildAxiosHttpClient());
