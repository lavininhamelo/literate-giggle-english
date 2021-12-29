import { HttpClient, HttpStatusCode } from 'application/adapters/http/index';
import { UnexpectedError, AccessDeniedError } from 'application/errors';
import { UpdateLevel } from 'domain/Base/StudyObject/usecases/update-level';

export class SetLevel implements UpdateLevel {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(params: UpdateLevel.Input): Promise<UpdateLevel.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'put',
			body: params,
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

export namespace SetLevel {
	export type Input = UpdateLevel.Input;
}
