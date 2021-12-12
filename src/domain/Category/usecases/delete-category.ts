export interface DeleteCategory {
	run: (input: DeleteCategory.Input) => Promise<DeleteCategory.Output>;
}

export namespace DeleteCategory {
	export type Input = {
		id: string;
	};
	export type Output = void;
}
