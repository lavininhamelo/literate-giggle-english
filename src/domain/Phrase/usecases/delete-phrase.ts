export interface DeletePhrase {
	delete: (input: DeletePhrase.Input) => void;
}

export namespace DeletePhrase {
	export type Input = {
		id: string;
	};
}
