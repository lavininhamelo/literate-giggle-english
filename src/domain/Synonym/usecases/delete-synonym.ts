export interface DeleteSynonym {
	delete: (input: DeleteSynonym.Input) => void;
}

export namespace DeleteSynonym {
	export type Input = {
		id: string;
	};
}
