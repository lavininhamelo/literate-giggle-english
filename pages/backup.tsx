import type { NextPage } from 'next';
import { Backup } from 'presentation/pages/Home/Backup';
import { buildRunSetupWords } from 'factories/features/';

const BackupPage: NextPage = () => {
	const setupStudyObjects = buildRunSetupWords();
	return <Backup setupStudyObjects={setupStudyObjects} />;
};

export default BackupPage;
