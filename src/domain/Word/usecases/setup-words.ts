import { Word } from 'domain/Word/Word';

export interface SetupWords {
	run: (list: SetupWords.Input) => Promise<SetupWords.Output>;
}

export namespace SetupWords {
	export type Input = Word[];
	export type Output = Word[];
}
