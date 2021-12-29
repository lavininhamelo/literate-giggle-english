import { SetupStudyObjects } from 'domain/Base/StudyObject/usecases/setup-study-objects';
import { SetLevel } from './set-objects-level';
import { HttpClient, HttpStatusCode } from 'application/adapters/http';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class RunSetupStudyObjects implements SetupStudyObjects {
	constructor(
		private readonly urls: string[],
		private readonly httpClient: HttpClient,
		private readonly generateDateInterval: () => string,
	) {}

	async run() {
		let untrainedObjectsParams = {
			updated_at_lte: this.generateDateInterval(),
		};

		for (let url of this.urls) {
			const httpResponse = await this.httpClient.request({
				url,
				method: 'get',
				//TODO uncomment this before all tests
				//params: untrainedObjectsParams,
			});

			switch (httpResponse.statusCode) {
				case HttpStatusCode.ok:
					httpResponse?.body?.forEach((object) => {
						let setLevel = new SetLevel(url + object.id, this.httpClient);
						setLevel.run({ id: object.id, level: object.level + 1 });
					});
					break;
				case HttpStatusCode.forbidden:
					throw new AccessDeniedError();
				default:
					throw new UnexpectedError();
			}
		}
	}
}

export namespace RunSetupStudyObjects {}
