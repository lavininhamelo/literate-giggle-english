import { AccessDeniedError, UnexpectedError } from 'application/errors';
import { HttpClient, HttpStatusCode } from 'application/adapters/http';
import { CreateCategory } from 'domain/Category';

export class RemoteCreateCategory implements CreateCategory {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(params: CreateCategory.Input): Promise<CreateCategory.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'post',
			body: {
				name: params.name,
				status: true,
			},
		});

		console.log(httpResponse, this.url, params);
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

export namespace RemoteCreateCategory {
	export type Input = CreateCategory.Input;
}
