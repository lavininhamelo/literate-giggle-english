import { ListCategories } from 'domain/Category/usecases/list-categories';
import { processRequest } from 'presentation/helpers';
import { useStateCategory } from 'presentation/state';
import { useEffect } from 'react';

export function useCategory(listCategories: ListCategories) {
	const [categories, setCategories] = useStateCategory();

	const loadCategories = () => {
		const load = async () => {
			const _categories = await processRequest(listCategories, null, true);
			setCategories(_categories);
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
