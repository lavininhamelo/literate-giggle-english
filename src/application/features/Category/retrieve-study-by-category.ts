import { RetrieveStudyByCategory } from 'domain/Category/usecases/retrieve-study-by-category';
import { HttpClient, HttpStatusCode } from 'application/adapters/http';
import { UnexpectedError, AccessDeniedError } from 'application/errors';

export class HttpRetrieveStudyByCategory implements RetrieveStudyByCategory {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<RetrieveStudyByCategory.Output>,
	) {}

	async run(params: RetrieveStudyByCategory.Input): Promise<RetrieveStudyByCategory.Output> {
		const httpResponse = await this.httpClient.request({
			url: this.url + params.categoryId,
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

export namespace HttpRetrieveStudyByCategory {}
