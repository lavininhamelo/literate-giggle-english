import { Category } from '..';

export interface UpdateCategory {
	run: (input: UpdateCategory.Input) => Promise<UpdateCategory.Output>;
}

export namespace UpdateCategory {
	export type Input = Category;
	export type Output = Category;
}
