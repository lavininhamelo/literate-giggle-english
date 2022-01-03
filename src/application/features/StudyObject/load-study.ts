import { HttpClient, HttpStatusCode } from 'application/adapters/http/index';
import { UnexpectedError, AccessDeniedError } from 'application/errors';
import { LoadStudy } from 'domain/StudyObject/';

export class HttpLoadStudy implements LoadStudy {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(params: LoadStudy.Input): Promise<LoadStudy.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url + `/${params.studyType}`,
			method: 'get',
			params: {
				_sort: 'level:DESC',
			},
		});
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return httpResponse.body;
			case HttpStatusCode.forbidden:
				throw new AccessDeniedError();
			default:
				throw new UnexpectedError();
		}
	}
}
