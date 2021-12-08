import { SetupWords } from 'domain/Word/usecases/setup-words';
import { SetWordLevel } from './set-word-level';
import { HttpClient, HttpStatusCode } from '../http';
import { UnexpectedError, AccessDeniedError } from '../errors';

export class RunSetupWords implements SetupWords {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<SetupWords.Output>,
	) {}

	async run(): Promise<SetupWords.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
		});

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				if (httpResponse.body) {
					httpResponse.body.forEach((word) => {
						let setWordLevel = new SetWordLevel(this.url + word.id, this.httpClient);
						setWordLevel.update({ id: word.id, level: word.level + 1 });
					});
					return httpResponse.body;
				} else return [];
			case HttpStatusCode.forbidden:
				throw new AccessDeniedError();
			default:
				throw new UnexpectedError();
		}
	}
}

export namespace RunSetupWords {}
