import { Flashcard } from 'domain/Flashcard';
import { Phrase } from 'domain/Phrase';
import { Synonym } from 'domain/Synonym';
import { Word } from 'domain/Word';

export enum StudyObjectTypes {
	WORD = 'words',
	PHRASE = 'phrases',
	SYNONYM = 'synonyms',
	FLASHCARD = 'flashcards',
}

export type StudyObjects = Word | Phrase | Synonym | Flashcard;
