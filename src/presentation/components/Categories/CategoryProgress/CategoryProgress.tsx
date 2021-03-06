import { Button } from 'presentation/components/Shared/Form/Button';
import { Icon } from 'presentation/components/Shared/Icon';
import React, { HTMLAttributes } from 'react';

import {
	Container,
	Progress,
	ProgressWrapper,
	Category,
	Title,
	List,
	Item,
	Text,
	Actions,
	TrainedTimes,
} from './styles';

interface Props extends HTMLAttributes<HTMLDivElement> {
	name: string;
	wordsCount: number;
	phrasesCount: number;
	synonymsCount: number;
	trainings: number;
	flashcardsCount: number;
}

const CategoryProgress: React.FC<Props> = (
	{ name, wordsCount, phrasesCount, synonymsCount, flashcardsCount, trainings, className },
	...rest
) => {
	return (
		<Container className={className} {...rest}>
			<ProgressWrapper>
				<Progress>
					<TrainedTimes>{trainings || 0}</TrainedTimes>
				</Progress>
				<span>Trainings</span>
			</ProgressWrapper>
			<Category>
				<Title>{name}</Title>
				<List>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text>{wordsCount || 0} Words</Text>
					</Item>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text>{phrasesCount || 0} Phrases</Text>
					</Item>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text> {synonymsCount || 0} Synonyms</Text>
					</Item>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text> {flashcardsCount || 0} Flashcards</Text>
					</Item>
				</List>
				<Actions>
					<Button color="#69c977" variant="outline" className="mr-4">
						New
					</Button>
					<Button color="#69c977">Continue</Button>
				</Actions>
			</Category>
		</Container>
	);
};

export { CategoryProgress };
