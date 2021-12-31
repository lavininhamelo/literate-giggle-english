import { Category } from 'domain/Category';
import { selector, useRecoilValue } from 'recoil';
import { categoryState } from '../atoms/category';

const selectThreeFirstCategories = selector<Category[]>({
	key: 'selectThreeFirstCategories',
	get: ({ get }) => {
		const categories = get(categoryState);
		return getThreeFirstCategories(categories);
	},
});

const getThreeFirstCategories = (categories: Category[]) => {
	let threeFirstCategories = categories.slice(0, 3);
	return threeFirstCategories;
};

export function useStateThreeFirstCategories() {
	const threeFirstCategories = useRecoilValue(selectThreeFirstCategories);
	return threeFirstCategories;
}
