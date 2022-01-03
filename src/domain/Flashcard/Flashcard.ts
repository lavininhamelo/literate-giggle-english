import { StudyObject } from 'domain/StudyObject/StudyObject';

export interface Flashcard extends StudyObject {
	front: string;
	verse: string;
}
