export interface DeleteWord {
	run: (input: DeleteWord.Input) => void;
}

export namespace DeleteWord {
	export type Input = {
		id: string;
	};
}
