import { HttpClient, HttpStatusCode } from 'application/adapters/http/index';
import { UnexpectedError, AccessDeniedError } from 'application/errors';
import { UpdateLevel } from 'domain/StudyObject/usecases/update-level';

export class HttpSetStudyLevel implements UpdateLevel {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(params: UpdateLevel.Input): Promise<UpdateLevel.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url + `/${params.studyType}/${params.id}`,
			method: 'put',
			body: {
				level: params.level,
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
