import { Button } from 'presentation/components/Shared/Form/Button';
import { Icon } from 'presentation/components/Shared/Icon';
import React from 'react';

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
} from './styles';

interface Props {
	name: string;
}

const CategoryProgress: React.FC<Props> = ({ name }) => {
	return (
		<Container>
			<ProgressWrapper>
				<Progress>
					<Icon name="favorite" size="2rem" />
				</Progress>
				<span>50%</span>
			</ProgressWrapper>
			<Category>
				<Title>{name}</Title>
				<List>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text>13 Palavras</Text>
					</Item>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text>13 Phrases</Text>
					</Item>
					<Item>
						<Icon name="favorite" size="0.8rem" />
						<Text> 13 Synonym</Text>
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

export default CategoryProgress;
