import { Word } from '../Word/Word';

export interface Synonym {
	id: string;
	word: Word;
	synonyms: Word[];
}
