import { UpdateWordLevel } from 'domain/Word/usecases/update-level-word';
import { HttpClient, HttpStatusCode } from 'application/adapters/http/index';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class SetWordLevel implements UpdateWordLevel {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(params: UpdateWordLevel.Input): Promise<UpdateWordLevel.Output> {
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

export namespace SetWordLevel {
	export type Input = UpdateWordLevel.Input;
}
