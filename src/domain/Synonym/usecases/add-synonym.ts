import { Synonym, Word } from 'domain/entities';

export interface AddSynonym {
	add: (input: AddSynonym.Input) => Promise<AddSynonym.Output>;
}

export namespace AddSynonym {
	export type Input = {
		word: Word;
		synonyms: Word[];
	};
	export type Output = Synonym;
}
