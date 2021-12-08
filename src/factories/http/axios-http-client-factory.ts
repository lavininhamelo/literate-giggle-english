import { AxiosHttpClient } from 'infra/axios-client';

export const makeAxiosHttpClient = (): AxiosHttpClient => new AxiosHttpClient();
