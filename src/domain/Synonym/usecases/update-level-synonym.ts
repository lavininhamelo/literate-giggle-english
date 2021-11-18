import { Synonym } from 'domain/entities';

export interface UpdateSynonymLevel {
	update: (input: UpdateSynonymLevel.Input) => Promise<UpdateSynonymLevel.Output>;
}

export namespace UpdateSynonymLevel {
	export type Input = {
		id: string;
		level: number;
	};
	export type Output = Synonym;
}
