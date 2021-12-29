import { Phrase } from 'domain/Phrase';
import { Synonym } from 'domain/Synonym/Synonym';
import { Word } from 'domain/Word';
import { Category } from 'domain/Category';

export interface RetrieveStudyByCategory {
	run: (input: RetrieveStudyByCategory.Input) => Promise<RetrieveStudyByCategory.Output>;
}

export namespace RetrieveStudyByCategory {
	export type Input = {
		categoryId: string;
	};
	export type Output = Category & {
		words: Word[];
		synonyms: Synonym[];
		phrase: Phrase[];
	};
}
