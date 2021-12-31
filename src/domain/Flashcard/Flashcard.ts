import { StudyObject } from 'domain/Base/StudyObject/StudyObject';

export interface Flashcard extends StudyObject {
	front: string;
	verse: string;
}
