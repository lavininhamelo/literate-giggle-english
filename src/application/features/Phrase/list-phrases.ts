import { ListPhrases } from 'domain/Phrase/';
import { HttpClient, HttpStatusCode } from 'application/adapters/http';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class HttpListPhrases implements ListPhrases {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(): Promise<ListPhrases.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
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

export namespace HttpListPhrases {}
