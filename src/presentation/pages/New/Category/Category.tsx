import React, { ChangeEvent, useState } from 'react';
import { CreateCategory } from 'domain/Category';

import { Button } from 'presentation/components/Shared/Form';
import { InputText as Input } from 'presentation/components/Shared/Form';

import { Container, Title } from './styles';
import { processRequest } from 'presentation/helpers/processRequest';

interface Props {
	createNewCategory: CreateCategory;
}

export const Category: React.FC<Props> = ({ createNewCategory }, rest) => {
	const [categoryData, setCategoryData] = useState({
		name: '',
	});

	const onSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		processRequest(createNewCategory, categoryData);
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
				Create
			</Button>
		</Container>
	);
};
