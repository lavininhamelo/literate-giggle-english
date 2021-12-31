import { buildSetupStudyObjects } from 'factories/features';
import { buildHttpListCategories } from 'factories/features/Category/list-categories';
import type { NextPage } from 'next';
import { Home as HomePage } from 'presentation/pages/Home';

const Home: NextPage = () => {
	return (
		<HomePage
			listCategories={buildHttpListCategories()}
			setupStudyObjects={buildSetupStudyObjects()}
		/>
	);
};

export default Home;
