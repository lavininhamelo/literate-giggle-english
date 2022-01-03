import { Category } from 'domain/Category';
import { selector, useRecoilValue } from 'recoil';
import { categoryState } from '../atoms/category';

const categoriesById = selector({
	key: 'categoriesById',
	get: ({ get }) => {
		const categories = get(categoryState);
		return mapCategoriesById(categories);
	},
});

const mapCategoriesById = (categories: Category[]) => {
	let categoriesById = {};

	categories.forEach((category, index) => {
		categoriesById[category.id] = {
			index,
			...category,
		};
	});

	return categoriesById;
};

export function useStateCategoriesById() {
	const categories = useRecoilValue(categoriesById);
	return categories;
}
