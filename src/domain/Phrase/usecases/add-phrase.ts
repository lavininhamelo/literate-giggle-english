import { Phrase, Word } from 'domain/entities';

export interface AddPhrase {
	add: (input: AddPhrase.Input) => Promise<AddPhrase.Output>;
}

export namespace AddPhrase {
	export type Input = {
		phrase: string;
		level: number;
		words: Word[];
	};
	export type Output = Phrase;
}
