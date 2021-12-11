import { Category } from 'domain/Category';

export interface CreateCategory {
	run: (input: CreateCategory.Input) => Promise<CreateCategory.Output>;
}

export namespace CreateCategory {
	export type Input = {
		name: string;
		status: boolean;
	};
	export type Output = Category;
}
