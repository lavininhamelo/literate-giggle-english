import { HttpClient, HttpStatusCode } from 'application/adapters/http';
import { UnexpectedError, AccessDeniedError } from 'application/errors';
import { ListCategories } from 'domain/Category/usecases/list-categories';

export class HttpListCategories implements ListCategories {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(): Promise<ListCategories.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get',
			params: {
				_sort: 'updated_at:DESC',
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

export namespace HttpListCategories {}
