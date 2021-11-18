import { Word } from 'domain/Word';

export interface AddWord {
	run: (input: AddWord.Input) => Promise<AddWord.Output>;
}

export namespace AddWord {
	export type Input = {
		word: string;
		meaning: string;
		level: number;
		isIntern: boolean;
	};
	export type Output = Word | { fromPhrase: boolean };
}
