import { Word } from 'domain/Word';

export interface ListWords {
	run: () => Promise<ListWords.Output>;
}

export namespace ListWords {
	export type Output = Word[];
}
