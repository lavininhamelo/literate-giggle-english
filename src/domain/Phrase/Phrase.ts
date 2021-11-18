import { Word } from '../Word/Word';

export interface Phrase {
	id: string;
	phrase: string;
	level: number;
	words: Word[];
}
