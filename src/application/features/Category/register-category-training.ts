import { AccessDeniedError, UnexpectedError } from 'application/errors';
import { HttpClient, HttpStatusCode } from 'application/adapters/http';
import { Category, UpdateCategory } from 'domain/Category';

export class HttpRegisterCategoryTraining implements UpdateCategory {
	constructor(private readonly url: string, private readonly httpClient: HttpClient<Category>) {}

	async run(params: UpdateCategory.Input): Promise<UpdateCategory.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url + `/${params.id}`,
			method: 'put',
			body: {
				trainings: params.trainings + 1,
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
