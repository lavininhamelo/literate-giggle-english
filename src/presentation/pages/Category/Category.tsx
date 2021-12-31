import React from 'react';
import Link from 'next/link';
import { ListCategories } from 'domain/Category/usecases/list-categories';
import { CategoryProgress } from 'presentation/components/Categories';
import { Container, CategoriesWrapper, Title } from './styles';
import { useCategory } from './useCategory';
import { Button } from 'presentation/components/Shared/Form';

interface Props {
	listCategories: ListCategories;
}

const Category: React.FC<Props> = ({ listCategories }) => {
	const { categories } = useCategory(listCategories);
	return (
		<Container>
			<Title>Categories</Title>
			<span className="mb-8">
				<Link href="/new/category" passHref>
					<Button rightIcon="add">Create Category</Button>
				</Link>
			</span>
			<CategoriesWrapper>
				{!!categories &&
					categories.map((category) => (
						<CategoryProgress
							key={category.id}
							name={category.name}
							phrasesCount={category.phrases.length}
							synonymsCount={category.synonyms.length}
							wordsCount={category.words.length}
							flashcardsCount={category.flashcards.length}
							trainings={category.trainings}
						/>
					))}
			</CategoriesWrapper>
		</Container>
	);
};

export { Category };
