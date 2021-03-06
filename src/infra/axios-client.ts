import { HttpRequest, HttpResponse, HttpClient } from 'application/adapters/http';

import axios, { AxiosResponse } from 'axios';

export class AxiosHttpClient implements HttpClient {
	async request(data: HttpRequest): Promise<HttpResponse> {
		let axiosResponse: AxiosResponse;
		try {
			axiosResponse = await axios.request({
				url: data.url,
				method: data.method,
				data: data.body,
				headers: data.headers,
				params: data.params,
			});
		} catch (error: any) {
			axiosResponse = error.response;
		}
		return {
			statusCode: axiosResponse?.status || 102,
			body: axiosResponse?.data,
		};
	}
}
