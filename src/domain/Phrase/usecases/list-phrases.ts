import { Phrase } from 'domain/Phrase';

export interface ListPhrases {
	run: () => Promise<ListPhrases.Output>;
}

export namespace ListPhrases {
	export type Output = Phrase[];
}
