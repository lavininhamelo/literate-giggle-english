import { HttpClient, HttpStatusCode } from 'application/adapters/http/index';
import { UnexpectedError, AccessDeniedError } from 'application/errors';
import { LoadStudyByCategory, StudyObject } from 'domain/StudyObject/';

export class HttpLoadStudyByCategory implements LoadStudyByCategory {
	constructor(private readonly url: string, private readonly httpClient: HttpClient<StudyObject>) {}

	async run(params: LoadStudyByCategory.Input): Promise<LoadStudyByCategory.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url + `/${params.studyType}`,
			method: 'get',
			params: {
				categories: params?.categoryId,
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
