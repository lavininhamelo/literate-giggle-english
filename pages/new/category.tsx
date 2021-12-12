import type { NextPage } from 'next';
import { buildCreateCategory } from 'factories/features';
import { Category } from 'presentation/pages/New/Category';

const CategoryPage: NextPage = () => {
	let createNewCategory = buildCreateCategory();
	return <Category createNewCategory={createNewCategory} />;
};

export default CategoryPage;
