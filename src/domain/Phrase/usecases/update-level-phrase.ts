import { Phrase } from 'domain/Phrase';

export interface UpdatePhraseLevel {
	update: (input: UpdatePhraseLevel.Input) => Promise<UpdatePhraseLevel.Output>;
}

export namespace UpdatePhraseLevel {
	export type Input = {
		id: string;
		level: number;
	};
	export type Output = Phrase;
}
