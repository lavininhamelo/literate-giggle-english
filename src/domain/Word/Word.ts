import { Category } from 'domain/Category';

export interface Word {
	id: string;
	word: string;
	level: number;
	meaning: string;
	categories?: [Category];
}
