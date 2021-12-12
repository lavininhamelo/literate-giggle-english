import { DeleteCategory } from 'domain/Category/usecases/delete-category';
import { HttpClient, HttpStatusCode } from 'application/adapters/http/index';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class RemoteDeleteCategory implements DeleteCategory {
	constructor(private readonly url: string, private readonly httpClient: HttpClient) {}

	async run(params: DeleteCategory.Input): Promise<DeleteCategory.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url + `/${params.id}`,
			method: 'delete',
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
