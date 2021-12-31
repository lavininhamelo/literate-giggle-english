import { Category } from 'domain/Category';

export interface ListCategories {
	run: () => Promise<ListCategories.Output>;
}

export namespace ListCategories {
	export type Output = Category[];
}
