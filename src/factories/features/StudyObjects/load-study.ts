import { HttpLoadStudy } from 'application/features';
import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';

const url = buildApiUrl('');
export const buildLoadStudy = () => new HttpLoadStudy(url, buildAxiosHttpClient());
