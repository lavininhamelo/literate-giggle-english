import { StudyObject } from 'domain/Base/StudyObject/StudyObject';
import { Word } from '../Word/Word';

export interface Phrase extends StudyObject {
	phrase: string;
	words: Word[];
	meaning?: string;
}
