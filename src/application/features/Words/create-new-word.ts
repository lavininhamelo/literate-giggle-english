import { AccessDeniedError, UnexpectedError } from 'application/errors';
import { HttpStatusCode } from 'application/adapters/http';
import { AddWord } from 'domain/Word/usecases/add-word';

export class RemoteCreateNewWord implements AddWord {
	constructor(private readonly url: string, private readonly httpClient: any) {}

	async run(params: AddWord.Input): Promise<AddWord.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: {
				is_intern: params.isIntern,
				word: params.word,
				meaning: params.meaning,
				level: 10,
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

export namespace RemoteAddWord {
	export type Input = AddWord.Input;
}
