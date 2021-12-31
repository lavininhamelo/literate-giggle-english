import { Category } from 'domain/Category';

export interface StudyObject {
	id: string;
	level: number;
	status: boolean;
	categories?: Category[];
}
