import { Flashcard } from 'domain/Flashcard';
import { Phrase } from 'domain/Phrase';
import { Synonym } from 'domain/Synonym/';
import { Word } from 'domain/Word';

export interface Category {
	id: string;
	name: string;
	status: boolean;
	trainings: number;
	phrases?: Phrase[];
	words?: Word[];
	synonyms?: Synonym[];
	flashcards?: Flashcard[];
}
