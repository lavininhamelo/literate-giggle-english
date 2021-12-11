import { ListWords } from 'domain/Word/usecases/list-words';
import { HttpClient, HttpStatusCode } from 'application/adapters';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class RemoteListWords implements ListWords {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(): Promise<ListWords.Output> {
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

export namespace RemoteListWords {}
