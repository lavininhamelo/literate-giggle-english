import { Category } from 'domain/Category';
import { Phrase } from 'domain/Phrase';

export interface CreatePhrase {
	run: (input: CreatePhrase.Input) => Promise<CreatePhrase.Output>;
}

export namespace CreatePhrase {
	export type Input = {
		phrase: string;
		meaning: string;
		categories?: [Category];
	};
	export type Output = Phrase;
}
