import { StudyObjects } from '../StudyObjectTypes';

export interface LoadStudy {
	run: (input: LoadStudy.Input) => Promise<LoadStudy.Output>;
}

export namespace LoadStudy {
	export type Input = {
		studyType: StudyObjects;
	};

	export type Output = StudyObjects
}
