import { AxiosHttpClient } from 'infra/axios-client';

export const buildAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient();
