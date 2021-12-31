import { buildHttpListCategories } from 'factories/features/Category/list-categories';
import type { NextPage } from 'next';
import { Category as CategoryPage } from 'presentation/pages/Category';

const Category: NextPage = () => {
	return <CategoryPage listCategories={buildHttpListCategories()} />;
};

export default Category;
