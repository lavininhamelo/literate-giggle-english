import { AccessDeniedError, UnexpectedError } from 'application/errors';
import { HttpStatusCode } from 'application/adapters/http';
import { CreatePhrase } from 'domain/Phrase/usecases/create-phrase';

export class HttpCreateNewPhrase implements CreatePhrase {
	constructor(private readonly url: string, private readonly httpClient: any) {}

	async run(params: CreatePhrase.Input): Promise<CreatePhrase.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: {
				phrase: params.phrase,
				meaning: params.meaning,
				level: 10,
				categories: params?.categories,
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
