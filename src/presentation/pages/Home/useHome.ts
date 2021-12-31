import { ListCategories } from 'domain/Category/usecases/list-categories';
import { SetupStudyObjects } from 'domain/Base';
import { processRequest } from 'presentation/helpers';
import { useCategory, useThreeFirstCategories } from 'presentation/state';
import { useEffect } from 'react';

export function useHome(listCategories: ListCategories, setupStudyObjects: SetupStudyObjects) {
	const [, setCategories] = useCategory();
	const categories = useThreeFirstCategories();

	const loadCategories = () => {
		const load = async () => {
			const _categories = await processRequest(listCategories, null, true);
			await processRequest(setupStudyObjects, null, true);
			setCategories(_categories), 3000;
		};
		load();
	};

	useEffect(() => {
		const load = () => {
			loadCategories();
		};
		load();
	}, []);

	return { categories };
}
