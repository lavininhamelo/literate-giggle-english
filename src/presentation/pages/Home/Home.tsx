import Button from 'presentation/components/Form/Button';
import React from 'react';
import { ButtonsWrapper } from '.';
import dynamic from 'next/dynamic';

const StudyChart = dynamic(
	(): any => {
		return import('./components/Chart');
	},
	{ ssr: false },
);

import { Metric } from './components/Metric';

import {
	Container,
	ContentWrapper,
	Sidebar,
	Title,
	Header,
	Image,
	MetricsWrapper,
	ProfilePic,
} from './styles';

const Home: React.FC = () => {
	return (
		<Container>
			<Sidebar>
				<Header>
					<ProfilePic>
						<Image src="https://i.pinimg.com/736x/65/cf/ec/65cfec29f32c5dce237e32f06491e7e2.jpg" />
					</ProfilePic>
					<Title>
						Welcome, <b>Lavínia!</b>
					</Title>
				</Header>
				<ButtonsWrapper className="mb-4">
					<Button>Go to categories</Button>
					<Button className="ml-4">New training</Button>
				</ButtonsWrapper>
			</Sidebar>
			<ContentWrapper>
				<Title>Plano de Estudos</Title>
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
