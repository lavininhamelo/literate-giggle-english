import { SetupStudyObjects } from 'domain/Base/StudyObject/usecases/setup-study-objects';
import React, { useEffect } from 'react';

type Props = {
	setupStudyObjects: SetupStudyObjects;
};

export const Backup: React.FC<Props> = ({ setupStudyObjects }) => {
	useEffect(() => {
		async function load() {
			const setupList = await setupStudyObjects.run();
			console.log(setupList);
		}
		load();
	}, []);

	return (
		<div className="pa-4">
			<h1 className="text-blue-500 ml-8">Welcome to the Next Clean!</h1>
		</div>
	);
};
