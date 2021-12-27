import type { NextPage } from 'next';
import { Test } from 'presentation/pages/Test/Test';

const WordPage: NextPage = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<Test />
		</div>
	);
};

export default WordPage;
