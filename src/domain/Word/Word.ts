import { StudyObject } from 'domain/StudyObject/StudyObject';
export interface Word extends StudyObject {
	word: string;
	meaning?: string;
	isIntern?: boolean;
}
