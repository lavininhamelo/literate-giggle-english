import type { NextPage } from 'next';
import { PhraseTraining } from 'presentation/pages/Training';

const PhrasePage: NextPage = () => {
	return (
		<div className="w-full flex items-center justify-center">
			<PhraseTraining />
		</div>
	);
};

export default PhrasePage;
