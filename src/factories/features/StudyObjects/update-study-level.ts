import { HttpSetStudyLevel } from 'application/features';
import { buildApiUrl, buildAxiosHttpClient } from 'factories/http';

const url = buildApiUrl('');
export const buildSetStudyLevel = () => new HttpSetStudyLevel(url, buildAxiosHttpClient());
