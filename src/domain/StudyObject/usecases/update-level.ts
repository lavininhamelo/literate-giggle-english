import { StudyObject } from 'domain/StudyObject';
import { StudyObjectTypes } from '../StudyObjectTypes';

export interface UpdateLevel {
	run: (input: UpdateLevel.Input) => Promise<UpdateLevel.Output>;
}

export namespace UpdateLevel {
	export type Input = {
		id: string;
		level: number;
		studyType: StudyObjectTypes;
	};
	export type Output = StudyObject;
}
