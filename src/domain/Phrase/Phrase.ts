import { StudyObject } from 'domain/Base/StudyObject/StudyObject';
export interface Phrase extends StudyObject {
	phrase: string;
	meaning?: string;
}
