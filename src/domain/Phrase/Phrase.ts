import { StudyObject } from 'domain/StudyObject/StudyObject';
export interface Phrase extends StudyObject {
	phrase: string;
	meaning: string;
}
