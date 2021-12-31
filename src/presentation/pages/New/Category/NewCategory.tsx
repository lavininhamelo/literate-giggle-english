import React, { ChangeEvent } from 'react';
import { CreateCategory } from 'domain/Category';
import { Button, InputText as Input } from 'presentation/components/Shared/Form';
import { Container, Title } from './styles';
import { useNewCategory } from './useNewCategory';

interface Props {
	createNewCategory: CreateCategory;
}

export const Category: React.FC<Props> = ({ createNewCategory }, rest) => {
	const { categoryData, setCategoryData, onSubmit } = useNewCategory(createNewCategory);
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
