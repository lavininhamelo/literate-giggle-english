import { HttpLoadStudyByCategory } from 'application/features';
import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';

const url = buildApiUrl('');
export const buildLoadStudyByCategory = () =>
	new HttpLoadStudyByCategory(url, buildAxiosHttpClient());
