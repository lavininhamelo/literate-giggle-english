import React from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import { ListCategories } from 'domain/Category/usecases/list-categories';
import { SetupStudyObjects } from 'domain/Base';
import { Metric } from './components/Metric';
import { CategoryProgress } from 'presentation/components/Categories';
import { Button } from 'presentation/components/Shared/Form/Button';
import {
	Container,
	ContentWrapper,
	Sidebar,
	ButtonsWrapper,
	CategoriesWrapper,
	Title,
	Header,
	Image,
	MetricsWrapper,
	ProfilePic,
} from './styles';
import { useHome } from './useHome';

const StudyChart = dynamic(
	() => {
		return import('./components/Chart');
	},
	{ ssr: false },
);

interface Props {
	listCategories: ListCategories;
	setupStudyObjects: SetupStudyObjects;
}

const Home: React.FC<Props> = ({ listCategories, setupStudyObjects }) => {
	const { categories } = useHome(listCategories, setupStudyObjects);
	return (
		<Container>
			<Sidebar>
				<Header>
					<ProfilePic>
						<Image
							src="https://i.pinimg.com/736x/65/cf/ec/65cfec29f32c5dce237e32f06491e7e2.jpg"
							alt="Profile Picture"
						/>
					</ProfilePic>
					<Title>
						Welcome, <b>Lavínia!</b>
					</Title>
				</Header>
				<ButtonsWrapper className="mb-4">
					<Link href="/categories">
						<Button>Go to categories</Button>
					</Link>
					<Link href="/training">
						<Button className="ml-4">New training</Button>
					</Link>
				</ButtonsWrapper>
				<CategoriesWrapper>
					{!!categories &&
						categories.map((category) => (
							<CategoryProgress
								key={category.id}
								name={category.name}
								className="mb-8"
								phrasesCount={category.phrases.length}
								synonymsCount={category.synonyms.length}
								wordsCount={category.words.length}
								trainings={category.trainings}
							/>
						))}
				</CategoriesWrapper>
			</Sidebar>
			<ContentWrapper>
				<Title>Study Frequency</Title>
				<MetricsWrapper>
					<Metric icon="favorite" title="Trained Words" value={234} color="#ffa76c" />
					<Metric icon="favorite" title="Phrases to Learn" value={134} color="#f8aecd" />
					<Metric icon="favorite" title="Synonym to Use" value={54} color="#601bbb" />
				</MetricsWrapper>
				<StudyChart />
			</ContentWrapper>
		</Container>
	);
};

export { Home };
