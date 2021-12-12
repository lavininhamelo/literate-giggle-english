import type { NextPage } from 'next';
import { makeCreateCategory } from 'factories/features';
import { Category } from 'presentation/pages/New/Category';

const CategoryPage: NextPage = () => {
	let createNewCategory = makeCreateCategory();
	return <Category createNewCategory={createNewCategory} />;
};

export default CategoryPage;
