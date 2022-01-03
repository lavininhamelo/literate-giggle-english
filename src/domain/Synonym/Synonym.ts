import { StudyObject } from 'domain/StudyObject/StudyObject';
import { Word } from '../Word/Word';
export interface Synonym extends StudyObject {
	word: string;
	meaning?: string;
	synonyms: Word[];
}
