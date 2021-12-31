import React, { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { CreateCategory } from 'domain/Category';
import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';
import { processRequest } from 'presentation/helpers/processRequest';
import { Container, Title } from './styles';

interface Props {
	createNewCategory: CreateCategory;
}

export const Category: React.FC<Props> = ({ createNewCategory }, rest) => {
	const router = useRouter();

	const [categoryData, setCategoryData] = useState({
		name: '',
	});

	const onSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		const isSuccess = await processRequest(createNewCategory, categoryData);
		if (isSuccess) {
			router.push('/categories');
		}
	};

	return (
		<Container {...rest} className="p-8">
			<Title>Create new Category</Title>
			<Input
				className="mt-4"
				type="text"
				name="category"
				label="Name"
				value={categoryData.name}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					setCategoryData({
						...categoryData,
						name: event.target.value,
					})
				}
			/>
			<Button className="mt-4" onClick={(e) => onSubmit(e)}>
				Create category
			</Button>
		</Container>
	);
};
