import { Word } from 'domain/Word';
import { Category } from 'domain/Category';

export interface AddWord {
	run: (input: AddWord.Input) => Promise<AddWord.Output>;
}

export namespace AddWord {
	export type Input = {
		word: string;
		meaning: string;
		isIntern: boolean;
		categories?: [Category];
	};
	export type Output = Word & { fromPhrase?: boolean };
}
