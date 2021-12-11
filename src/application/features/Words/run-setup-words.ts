import { SetupWords } from 'domain/Word/usecases/setup-words';
import { SetWordLevel } from './set-word-level';
import { HttpClient, HttpStatusCode } from 'application/adapters';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class RunSetupWords implements SetupWords {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<SetupWords.Output>,
	) {}

	private generateDateInterval(): string {
		const tenDaysAgo = 240; // 24 hours * 10 days
		let today = new Date();
		let before = today.setHours(-tenDaysAgo);
		let beforeDate = new Date(before);
		return beforeDate.toISOString();
	}

	async run(): Promise<SetupWords.Output> {
		let untrainedWordsParams = {
			updated_at_lte: this.generateDateInterval(),
		};

		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
			params: untrainedWordsParams,
		});

		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				if (httpResponse.body) {
					httpResponse.body.forEach((word) => {
						let setWordLevel = new SetWordLevel(this.url + word.id, this.httpClient);
						setWordLevel.run({ id: word.id, level: word.level + 1 });
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
