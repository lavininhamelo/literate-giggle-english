import { Word } from '../Word';

export interface UpdateWordLevel {
	run: (input: UpdateWordLevel.Input) => Promise<UpdateWordLevel.Output>;
}

export namespace UpdateWordLevel {
	export type Input = {
		id: string;
		level: number;
	};
	export type Output = Word;
}
