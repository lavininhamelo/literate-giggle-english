import { useRouter } from 'next/router';
import { processRequest } from 'presentation/helpers/processRequest';
import { CreateCategory } from 'domain/Category';
import { useState } from 'react';

export function useNewCategory(createNewCategory: CreateCategory) {
	const router = useRouter();
	const [categoryData, setCategoryData] = useState({
		name: '',
	});

	const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const isSuccessful = await processRequest(createNewCategory, categoryData);
		if (isSuccessful) {
			router.push('/categories');
		}
	};

	return {
		categoryData,
		setCategoryData,
		onSubmit,
	};
}
