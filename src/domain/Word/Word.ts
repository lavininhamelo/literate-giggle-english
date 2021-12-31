import { StudyObject } from 'domain/Base/StudyObject/StudyObject';
export interface Word extends StudyObject {
	word: string;
	meaning?: string;
	isIntern?: boolean;
}
