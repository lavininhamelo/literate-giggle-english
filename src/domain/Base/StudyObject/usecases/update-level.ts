import { StudyObject } from 'domain/Base/StudyObject';

export interface UpdateLevel {
	run: (input: UpdateLevel.Input) => Promise<UpdateLevel.Output>;
}

export namespace UpdateLevel {
	export type Input = {
		id: string;
		level: number;
	};
	export type Output = StudyObject;
}
