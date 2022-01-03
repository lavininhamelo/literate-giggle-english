import type { NextPage } from 'next';
import { WordTraining } from 'presentation/pages/Training';

const WordPage: NextPage = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<WordTraining />
		</div>
	);
};

export default WordPage;
