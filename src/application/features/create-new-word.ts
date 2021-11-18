import { AddWord } from '../../domain/Word/usecases/add-word';

export class RemoteCreateNewWord implements AddWord {
	constructor(private readonly url: string, private readonly httpClient: any) {}

	async add(params: AddWord.Input): Promise<AddWord.Output> {
		const response = {} as AddWord.Output;
		return response;
	}
}

export namespace RemoteAddWord {
	export type Input = AddWord.Input;
}
