import { StudyObject } from '..';

export interface LoadStudyByCategory {
	run: (input: LoadStudyByCategory.Input) => Promise<LoadStudyByCategory.Output>;
}

export namespace LoadStudyByCategory {
	export type Input = {
		studyType: 'words' | 'phrases' | 'flashcards' | 'synonyms';
		categoryId: string;
	};

	export type Output = StudyObject;
}
